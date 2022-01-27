import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderItem from './styled/HeaderItem';
import Header from './styled/Header';
import { setUserAction } from '../../redux/actions/actions';
import { LogoutOutlined } from '@ant-design/icons';

const RequireAuth = ({ children }) => {
  const user = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [location.pathname, navigate, user]);

  const clickLogout = () => {
    dispatch(setUserAction(null));
  };

  return (
    <>
      <Header>
        <HeaderItem>{user}</HeaderItem>
        <HeaderItem onClick={clickLogout}>
          Logout <LogoutOutlined />
        </HeaderItem>
      </Header>
      {children}
    </>
  );
};

export default RequireAuth;
