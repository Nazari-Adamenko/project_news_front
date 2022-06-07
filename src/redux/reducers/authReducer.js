import { MODAL_REGISTRATION, MODAL_AUTOROTATION, MODAL_CLOSE } from '../constants';

const initialState = {
  isOpen: false,
  typeModal: '',
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MODAL_REGISTRATION:
      return {
        ...state,
        typeModal: 'registration',
        isOpen: true,
      };
    case MODAL_AUTOROTATION:
      return {
        ...state,
        typeModal: 'autorotation',
        isOpen: true,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        typeModal: '',
        isOpen: false,
      };
    default:
      return state;
  }
}
