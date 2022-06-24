import {
  USER_DATA_FAILED,
  USER_DATA_RECEIVED,
  USER_DATA_AUTH_REQUESTED,
  USER_DATA_REQUESTED,
} from '../../constants';

const initialState = {
  isFetching: false,
  userData: {},
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_DATA_AUTH_REQUESTED:
      return {
        ...state,
        isFetching: true,
        userData: {},
        error: null,
      };
    case USER_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
        userData: {},
        error: null,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
        error: null,
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        userData: {},
        error: action.error,
      };
    default:
      return state;
  }
}
