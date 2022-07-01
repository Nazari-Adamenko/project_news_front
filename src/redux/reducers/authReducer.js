import {
  TOGGLE_MODAL,
  AUTH_RECEIVED,
  USER_DATA,
  AUTH_FAILED,
  AUTH_LOGOUT,
} from '../../constants';

const initialState = {
  statusModal: false,
  typeModal: '',
  authUser: {},
  isFetching: null,
  isLoggedIn: Boolean(localStorage.getItem('token')),
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        typeModal: action.payload.type,
        statusModal: action.payload.status,
        error: null,
      };
    case AUTH_RECEIVED:
      return {
        ...state,
        typeModal: '',
        authUser: action.payload,
        statusModal: false,
        isLoggedIn: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        authUser: {},
        isLoggedIn: false,
      };
    case USER_DATA:
      return {
        ...state,
        authUser: {},
        isFetching: true,
        error: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
