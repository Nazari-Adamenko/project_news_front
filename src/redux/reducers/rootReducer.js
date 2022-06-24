import { combineReducers } from 'redux';

import authReducer from './authReducer';
import createPostsReducer from './createPostsReducer';
import postsReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  dataUser: userReducer,
  createNews: createPostsReducer,
});

export default rootReducer;
