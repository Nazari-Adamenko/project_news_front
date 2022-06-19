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
  user: {},
  isFetching: null,
  message: '',
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
        message: '',
      };
    case AUTH_RECEIVED:
      return {
        ...state,
        typeModal: '',
        statusModal: false,
        isLoggedIn: true,
        message: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case USER_DATA:
      return {
        ...state,
        user: {},
        isFetching: true,
        error: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        user: {},
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
