import * as actionTypes from '../../constants';

export const getPosts = () => ({
  type: actionTypes.POSTS_REQUESTED,
});

export const gotPosts = (payload) => ({
  type: actionTypes.POSTS_RECEIVED,
  payload,
});

export const cannotGetNews = (error) => ({
  type: actionTypes.POSTS_FAILED,
  error,
});

export const createPost = (payload) => ({
  type: actionTypes.CREATE_POST_REQUESTED,
  payload,
});

export const createGotPost = (payload) => ({
  type: actionTypes.CREATE_POST_RECEIVED,
  payload,
});

export const cannotCreatePost = (error) => ({
  type: actionTypes.CREATE_POST_FAILED,
  error,
});

export const callNewsCreationPage = (payload) => ({
  type: actionTypes.CALL_NEWS_CREATION_PAGE,
  payload,
});

export const toggleModal = (payload) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload,
});

export const getUser = (payload) => ({
  type: actionTypes.USER_DATA,
  payload,
});

export const gotUsers = (payload) => ({
  type: actionTypes.AUTH_RECEIVED,
  payload,
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const cannotBadRequest = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error,
});

export const getUserData = (payload) => ({
  type: actionTypes.USER_DATA_REQUESTED,
  payload,
});

export const getUserDataAuth = (payload) => ({
  type: actionTypes.USER_DATA_AUTH_REQUESTED,
  payload,
});

export const gotUserData = (payload) => ({
  type: actionTypes.USER_DATA_RECEIVED,
  payload,
});

export const cannotUserData = (error) => ({
  type: actionTypes.USER_DATA_FAILED,
  error,
});
