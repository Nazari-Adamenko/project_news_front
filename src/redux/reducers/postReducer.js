import {
  POSTS_REQUESTED,
  POSTS_RECEIVED,
  POSTS_FAILED,
  TOGGLE_POST_MODAL,
  CREATE_POST_REQUESTED,
  CREATE_POST_RECEIVED,
  CREATE_POST_FAILED,
} from '../../constants';

const initialState = {
  posts: [],
  isShowCreatedNews: false,
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
        error: action.error,
      };
    case CREATE_POST_REQUESTED:
      return {
        ...state,
        isFetching: true,
        itsCreated: {},
        error: null,
      };
    case CREATE_POST_RECEIVED:
      return {
        ...state,
        isFetching: false,
        itsCreated: action.payload,
        isShowCreatedNews: false,
        error: null,
      };
    case CREATE_POST_FAILED:
      return {
        ...state,
        isFetching: false,
        itsCreated: {},
        error: action.error,
      };
    case TOGGLE_POST_MODAL:
      return {
        ...state,
        isShowCreatedNews: action.payload,
      };
    default:
      return state;
  }
}
