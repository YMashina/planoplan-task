import {
  RESET_POSTS,
  SET_CURRENT_POST,
  SET_CURRENT_POST_LOADING,
  SET_PAGE,
  SET_POSTS,
  SET_POSTS_LOADING,
  SET_SHOW_LOADMORE,
  SET_USER,
} from './actionTypes';

export const setPostsAction = (payload) => {
  return {
    type: SET_POSTS,
    payload,
  };
};

export const resetPostsAction = () => {
  return {
    type: RESET_POSTS,
  };
};

export const setPostsLoadingAction = () => {
  return {
    type: SET_POSTS_LOADING,
  };
};

export const setUserAction = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const setCurrentPostAction = (payload) => {
  return {
    type: SET_CURRENT_POST,
    payload,
  };
};

export const setCurrentPostLoadingAction = (payload) => {
  return {
    type: SET_CURRENT_POST_LOADING,
    payload,
  };
};

export const setPageAction = (payload) => {
  return {
    type: SET_PAGE,
    payload,
  };
};

export const setShowLoadMoreAction = (payload) => {
  return {
    type: SET_SHOW_LOADMORE,
    payload,
  };
};
