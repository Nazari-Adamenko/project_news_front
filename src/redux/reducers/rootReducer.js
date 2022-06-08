import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: authReducer,
});

export default rootReducer;
