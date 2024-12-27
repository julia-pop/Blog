import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { appSelectors } from '../../store';
import { fetchUserAuth } from '../../store/userSlice';
import SignUpForm from '../Forms/SignUpForm/SignUpForm';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, loading } = useSelector(appSelectors.userObj);

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
        username: valuesFromForm.username,
        email: valuesFromForm.email,
        password: valuesFromForm.password,
      },
    };

    const userData = JSON.stringify(formData);

    dispatch(fetchUserAuth(userData));
    if (token) {
      reset();
    }
    navigate('/', { replace: true });
  };

  return (
    <SignUpForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} loading={loading} />
  );
}
