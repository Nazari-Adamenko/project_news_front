import {
  POSTS_REQUESTED,
  POSTS_RECEIVED,
  POSTS_FAILED,
  CALL_NEWS_CREATION_PAGE,
  CREATE_POST_REQUESTED,
  CREATE_POST_RECEIVED,
  CREATE_POST_FAILED,
} from '../../constants';

const initialState = {
  posts: [],
  isShowCreateNews: false,
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
        isShowCreateNews: false,
        error: null,
      };
    case CREATE_POST_FAILED:
      return {
        ...state,
        isFetching: false,
        itsCreated: {},
        error: action.error,
      };
    case CALL_NEWS_CREATION_PAGE:
      return {
        ...state,
        isShowCreateNews: action.payload,
      };
    default:
      return state;
  }
}
