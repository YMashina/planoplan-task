import axios from 'axios';
import {
  setCurrentPostAction,
  setCurrentPostLoadingAction,
  setPostsAction,
  setPostsLoadingAction,
  setShowLoadMoreAction,
} from './actions';
import { store } from '../store';

export const getPostsAction = () => {
  return async (dispatch) => {
    dispatch(setPostsLoadingAction());
    const page = store.getState().feed.page;
    const limit = 5;
    const response = await axios.get('/posts', {
      params: {
        userId: 7,
        _start: page * limit,
        _limit: limit,
      },
    });
    if (response.data.length === 0 ) {
      dispatch(setShowLoadMoreAction(false));
    } else if (page === 0){
      dispatch(setShowLoadMoreAction(true));
    }
    dispatch(setPostsAction(response.data));
  };
};

export const getPostAction = (id) => {
  return async (dispatch) => {
    dispatch(setCurrentPostLoadingAction());
    const response = await axios.get(`/posts/${id}`);
    dispatch(setCurrentPostAction(response.data));
  };
};
