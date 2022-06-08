import { POSTS_REQUESTED, POSTS_RECEIVED, POSTS_FAILED } from '../constants';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

export default function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        isFetching: true,
        posts: [],
        error: null,
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
        error: null,
      };
    case POSTS_FAILED:
      return {
        ...state,
        isFetching: false,
        posts: [],
        error: action.error,
      };
    default:
      return state;
  }
}
