import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { appSelectors } from '../../store';
import { fetchUserLogin } from '../../store/userSlice';
import SignInForm from '../Forms/SignInForm/SignInForm';

export default function SignIn() {
  const location = useLocation();
  const dispatch = useDispatch();

  const fromPage = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  const { token, loading } = useSelector(appSelectors.userObj);

  const { error, username } = useSelector(appSelectors.userObj);

  if (username) {
    navigate(fromPage, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'all',
  });

  const onSubmit = (valuesFromForm) => {
    const formData = {
      user: {
        email: valuesFromForm.email,
        password: valuesFromForm.password,
      },
    };

    const userData = JSON.stringify(formData);

    dispatch(fetchUserLogin(userData));

    if (token) {
      reset();
    }
  };

  return (
    <SignInForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
}
