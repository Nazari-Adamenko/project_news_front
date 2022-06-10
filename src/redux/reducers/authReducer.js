import {
  GET_MODAL,
  AUTH_RECEIVED,
  USER_REGISTRATION,
  USER_AUTOROTATION,
  AUTH_FAILED,
} from '../constants';

const initialState = {
  statusModal: false,
  typeModal: '',
  user: [],
  isFetching: '',
  error: '',
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MODAL:
      return {
        ...state,
        typeModal: action.payload.type,
        statusModal: action.payload.status,
      };
    case AUTH_RECEIVED:
      return {
        ...state,
        typeModal: '',
        statusModal: false,
      };
    case USER_REGISTRATION:
      return {
        ...state,
        user: [],
        isFetching: true,
        error: null,
      };
    case USER_AUTOROTATION:
      return {
        ...state,
        user: [],
        isFetching: true,
        error: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        user: [],
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
