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
