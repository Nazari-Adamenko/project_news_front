import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postsReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  userData: userReducer,
});

export default rootReducer;
