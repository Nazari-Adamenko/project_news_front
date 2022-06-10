import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default rootReducer;
