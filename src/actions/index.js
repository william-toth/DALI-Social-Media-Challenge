import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  // NEWPOST: 'NEWPOST',
  // DELETEPOST: 'DELETEPOST',
  // EDITPOST: 'UPDATEPOST',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  SHOW_PROF: 'SHOW_PROF',
};

// const ROOT_URL = 'https://platform.cs52.me/api';
// const API_KEY = '?key=wtoth1';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://dali-social-media-api.herokuapp.com/api';
const API_KEY = '';

export function newPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      history.push('/');
      window.location.reload();
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
      history.push('/');
      window.location.reload();
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then(((response) => {
      window.location.reload();
    }));
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: null,
      });
    });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: null,
      });
    });
  };
}

export function showProf(prof) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SHOW_PROF,
      payload: prof,
    });
  };
}
