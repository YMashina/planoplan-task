import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from '../../redux/actions/asyncActions';
import PostTitle from '../Feed/styled/PostTitle';
import PostInfoLayout from './styled/PostInfoLayout';
import { RollbackOutlined } from '@ant-design/icons';
import Button from '../styled/Button';
import Spinner from '../styled/Spinner';

const PostInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.feed.currentPost.data);
  const isLoading = useSelector((state) => state.feed.currentPost.isLoading);
  const navigate = useNavigate();

  const clickGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getPostAction(params.postId));
  }, [dispatch, params.postId]);

  return (
    <PostInfoLayout>
      <Button
        active
        background={'none'}
        color={'#303030'}
        onClick={clickGoBack}
      >
        <RollbackOutlined /> Back to feed
      </Button>
      {isLoading ? (
        <Spinner alignSelf={'center'} />
      ) : (
        <>
          <PostTitle>{post.title}</PostTitle>
          <div>{post.body}</div>
        </>
      )}
    </PostInfoLayout>
  );
};

export default PostInfo;
