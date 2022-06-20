import {
  DATA_USER_FAILED,
  DATA_USER_RECEIVED,
  DATA_USER_REQUESTED,
} from '../../constants';

const initialState = {
  isFetching: false,
  dataUser: {},
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DATA_USER_REQUESTED:
      return {
        ...state,
        isFetching: true,
        dataUser: {},
        error: null,
      };
    case DATA_USER_RECEIVED:
      return {
        ...state,
        isFetching: false,
        dataUser: action.payload,
        error: null,
      };
    case DATA_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        dataUser: {},
        error: action.error,
      };
    default:
      return state;
  }
}
