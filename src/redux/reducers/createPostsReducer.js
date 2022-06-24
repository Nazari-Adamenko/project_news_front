import { STATUS_NEWS_CREATION_PAGE } from '../../constants';

const initialState = {
  isShowCreateNews: false,
};

export default function createPostsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case STATUS_NEWS_CREATION_PAGE:
      return {
        ...state,
        isShowCreateNews: action.payload,
      };
    default: return state;
  }
}
