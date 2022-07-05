import {
  USER_DATA_FAILED,
  USER_DATA_RECEIVED,
  USER_DATA_AUTH_REQUESTED,
  USER_DATA_REQUESTED,
  USER_DATA_AUTH_RECEIVED,
  CHANGE_USER_REQUESTED,
  CHANGE_USER_RECEIVED,
} from '../../constants';

const initialState = {
  isFetching: false,
  currentUserToken: {},
  currentUserId: {},
  // corrected: false,
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_DATA_AUTH_REQUESTED:
      return {
        ...state,
        isFetching: true,
        currentUserToken: {},
        error: null,
      };
    case USER_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
        currentUserId: {},
        error: null,
      };
    case USER_DATA_AUTH_RECEIVED:
      return {
        ...state,
        isFetching: false,
        currentUserToken: action.payload,
        error: null,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        isFetching: false,
        currentUserId: action.payload,
        // corrected: false,
        error: null,
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case CHANGE_USER_REQUESTED:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CHANGE_USER_RECEIVED:
      return {
        ...state,
        isFetching: false,
        error: null,
        currentUserToken: action.payload,
      };
    default:
      return state;
  }
}
