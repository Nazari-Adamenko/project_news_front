import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  dataUser: userReducer,
});

export default rootReducer;
