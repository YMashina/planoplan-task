import React, { useEffect, useState } from 'react';
import Form from './styled/Form';
import Field from './styled/Field';
import FormInput from './styled/FormInput';
import AuthLayout from './styled/AuthLayout';
import Button from '../styled/Button';
import { useNavigate } from 'react-router-dom';
import { setUserAction } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const Authorization = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.username);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const validateAuthentication = (username, password) => {
    if (username === 'Elwyn.Skiles' && password === '1234') {
      return true;
    }
    return false;
  };

  const clickSubmitAuth = () => {
    dispatch(setUserAction(usernameInput));
    if (user) {
      navigate('/');
    }
  };

  const changeUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const changePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <AuthLayout>
      <Form>
        <h3>Sign in</h3>
        <Field>
          <FormInput
            placeholder={'username'}
            onChange={changeUsernameInput}
            autocomplete="on"
            type={'email'}
          />
        </Field>
        <Field>
          <FormInput
            placeholder={'password'}
            type="password"
            onChange={changePasswordInput}
            autocomplete="on"
          />
        </Field>
        <Button
          active={validateAuthentication(usernameInput, passwordInput)}
          alignSelf={'end'}
          onClick={clickSubmitAuth}
          width={'100%'}
        >
          Submit
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default Authorization;
