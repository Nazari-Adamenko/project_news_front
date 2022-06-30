import {
  USER_DATA_FAILED,
  USER_DATA_RECEIVED,
  USER_DATA_AUTH_REQUESTED,
  USER_DATA_REQUESTED,
} from '../../constants';

const initialState = {
  isFetching: false,
  currentUser: {},
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_DATA_AUTH_REQUESTED:
      return {
        ...state,
        isFetching: true,
        currentUser: {},
        error: null,
      };
    case USER_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
        currentUser: {},
        error: null,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
        error: null,
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        currentUser: {},
        error: action.error,
      };
    default:
      return state;
  }
}
