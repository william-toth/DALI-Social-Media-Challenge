import { ActionTypes } from '../actions';

const PostReducer = (state = {
  all: [],
  current: {},
  prof: {},
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, current: state.current, prof: state.prof };
    case ActionTypes.FETCH_POST:
      return { all: state.all, current: action.payload, prof: state.prof };
    case ActionTypes.SHOW_PROF:
      return { all: state.all, current: state.current, prof: action.payload };
    default:
      return state;
  }
};

export default PostReducer;
