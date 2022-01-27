import {
  RESET_POSTS,
  SET_CURRENT_POST,
  SET_CURRENT_POST_LOADING,
  SET_PAGE,
  SET_POSTS,
  SET_POSTS_LOADING,
  SET_SHOW_LOADMORE,
} from '../actions/actionTypes';

const defaultState = {
  posts: { data: [], isLoading: false },
  page: 0,
  currentPost: { data: {}, isLoading: false },
  showLoadMore: true,
};

const feedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: {
          data: [...state.posts.data, ...action.payload],
          isLoading: false,
        },
      };
    case RESET_POSTS:
      return {
        ...state,
        posts: { data: [], isLoading: false },
      };
    case SET_POSTS_LOADING:
      return {
        ...state,
        posts: { ...state.posts, isLoading: true },
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: { data: action.payload, isLoading: false },
      };
    case SET_CURRENT_POST_LOADING:
      return {
        ...state,
        currentPost: { data: state.currentPost, isLoading: true },
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_SHOW_LOADMORE:
      return {
        ...state,
        showLoadMore: action.payload,
      };
    default:
      return state;
  }
};

export default feedReducer;
