import * as actionTypes from '../constants';
// это action creator - эти функции возвращают объект, который нужно запихать в диспатч
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

export const getModal = (payload) => ({
  type: actionTypes.GET_MODAL,
  payload,
});

export const createUser = (payload) => ({
  type: actionTypes.USER_REGISTRATION,
  payload,
});

export const gotUsers = (payload) => ({
  type: actionTypes.AUTH_RECEIVED,
  payload,
});

export const cannotBedRequest = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error,
});
