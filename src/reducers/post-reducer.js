import { ActionTypes } from '../actions';

const PostReducer = (state = {
  all: [],
  current: {},
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, current: state.current };
    case ActionTypes.FETCH_POST:
      return { all: state.all, current: action.payload };
    default:
      return state;
  }
};

export default PostReducer;
