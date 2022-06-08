import { GET_MODAL } from '../constants';

const initialState = {
  statusModal: false,
  typeModal: '',
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MODAL:
      return {
        ...state,
        typeModal: action.payload.type,
        statusModal: action.payload.status,
      };
    default:
      return state;
  }
}
