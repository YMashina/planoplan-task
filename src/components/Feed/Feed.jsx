import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/actions/asyncActions';
import Post from './styled/Post';
import FeedList from './styled/FeedList';
import PostTitle from './styled/PostTitle';
import { resetPostsAction, setPageAction } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import Button from '../styled/Button';
import FeedLayout from './styled/FeedLayout';
import Spinner from '../styled/Spinner';

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.feed.posts.data);
  const isLoading = useSelector((state) => state.feed.posts.isLoading);
  const showLoadMore = useSelector((state) => state.feed.showLoadMore);
  const page = useSelector((state) => state.feed.page);

  const clickPost = (id) => {
    navigate(`/posts/${id}`);
  };

  const clickLoadMore = () => {
    dispatch(setPageAction(page + 1));
  };

  return (
    <FeedLayout>
      <FeedList>
        {posts.map((post) => (
          <Post key={post.id} onClick={() => clickPost(post.id)}>
            <PostTitle>{post.title}</PostTitle>
            <br />
            <div>{post.body}</div>
          </Post>
        ))}
      </FeedList>
      <br />
      {isLoading ? <Spinner alignSelf={'center'} /> : showLoadMore ? (
        <Button
          onClick={clickLoadMore}
          alignSelf={'center'}
          active
          background={'#d0d0d0'}
        >
          Load more
        </Button>
      ) : (
        <div>No more posts.</div>
      )}
    </FeedLayout>
  );
};

export default memo(Feed);
