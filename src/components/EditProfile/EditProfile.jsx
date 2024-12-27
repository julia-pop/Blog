import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchUserEditProfile } from '../../store/userSlice';
import EditProfileForm from '../Forms/EditProfileForm/EditProfileForm';

export default function EditProfile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
        image: valuesFromForm.avatar,
      },
    };

    const userData = JSON.stringify(formData);

    dispatch(fetchUserEditProfile(userData));
    reset();
    navigate('/');
  };

  return <EditProfileForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} />;
}
