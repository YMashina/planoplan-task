import Authorization from './components/Authorization/Authorization';
import Feed from './components/Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth/RequireAuth';
import PageNotFound from './components/PageNotFound/PageNotFound';
import GlobalStyle from './components/styled/GlobalStyle';
import MainLayout from './components/styled/MainLayout';
import PostInfo from './components/PostInfo/PostInfo';
import { useEffect } from 'react';
import { resetPostsAction, setPageAction } from './redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from './redux/actions/asyncActions';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.username);
  const page = useSelector((state) => state.feed.page);

  useEffect(() => {
    dispatch(setPageAction(0));
    dispatch(resetPostsAction());
  }, [user]);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [user, page]);

  return (
    <MainLayout>
      <GlobalStyle />
      <Routes>
        <Route path='/auth' element={<Authorization />} />
        <Route
          path='/'
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />
        <Route
          path='/posts/:postId'
          element={
            <RequireAuth>
              <PostInfo />
            </RequireAuth>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
