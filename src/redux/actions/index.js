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

export const getDataUser = () => ({
  type: actionTypes.DATA_USER_REQUESTED,
});

export const gotDataUser = (payload) => ({
  type: actionTypes.DATA_USER_RECEIVED,
  payload,
});

export const cannotDataUser = (error) => ({
  type: actionTypes.DATA_USER_FAILED,
  error,
});
