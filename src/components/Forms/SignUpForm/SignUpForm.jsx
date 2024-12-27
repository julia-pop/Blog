import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './SignUpForm.module.scss';
import { appSelectors } from '../../../store';

export default function SignUpForm({ register, handleSubmit, errors, onSubmit }) {
  const userErrors = useSelector(appSelectors.userErrorsObj);

  const [password, setPassword] = useState(null);

  const { token, loading } = useSelector(appSelectors.userObj);
  return (
    <div className={classes.wrapper}>
      <h1>Create new account</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.label}>
          Username
          <input
            type="text"
            placeholder="Username"
            className={classes.input}
            {...register('username', {
              required: 'Required field',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'Maximum 20 characters',
              },
            })}
            style={(errors.username ?? userErrors) ? { borderColor: 'rgba(245, 34, 45, 1)' } : null}
          />
        </label>

        {(errors.username ?? userErrors?.username) ? (
          <div className={classes.error_message}>
            <p> {errors?.username?.message ?? userErrors.username}</p>
          </div>
        ) : null}

        <label className={classes.label}>
          Email address
          <input
            type="text"
            placeholder="Email address"
            className={classes.input}
            {...register('email', {
              required: 'Required field',
              pattern: {
                value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                message: 'Invalid email',
              },
            })}
            style={(errors.email ?? userErrors?.email) ? { borderColor: 'rgba(245, 34, 45, 1)' } : null}
          />
        </label>

        {(errors.email ?? userErrors?.email) ? (
          <div className={classes.error_message}>
            <p> {errors?.email?.message ?? userErrors?.email}</p>
          </div>
        ) : null}

        <label className={classes.label}>
          Password
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            {...register('password', {
              required: 'Required field',
              onChange: (e) => setPassword(e.target.value),
              minLength: {
                value: 6,
                message: 'Your password needs to be at least 6 characters.',
              },
              maxLength: {
                value: 40,
                message: 'Your password needs to be no more 40 characters.',
              },
            })}
            style={errors.password ? { borderColor: 'rgba(245, 34, 45, 1)' } : null}
          />
        </label>

        {errors.password ? (
          <div className={classes.error_message}>
            <p> {errors?.password?.message}</p>
          </div>
        ) : null}

        <label className={classes.label}>
          Repeat Password
          <input
            type="password"
            placeholder="Repeat Password"
            className={classes.input}
            {...register('confirm', {
              required: 'Required field',
              validate: (value) => value === password || 'Passwords must match',
            })}
            style={errors.confirm ? { borderColor: 'rgba(245, 34, 45, 1)' } : null}
          />
        </label>

        {errors.confirm ? (
          <div className={classes.error_message}>
            <p> {errors?.confirm?.message}</p>
          </div>
        ) : null}

        <div className={classes.checkbox_wrapper}>
          <label className={classes.label_checkbox}>
            <input
              type="checkbox"
              className={classes.checkbox}
              {...register('checkbox', {
                required: 'Required checkbox',
              })}
              style={errors.checkbox ? { accentColor: 'rgba(245, 34, 45, 1)' } : null}
            />
            I agree to the processing of my personal information
          </label>

          {errors.checkbox ? (
            <div className={classes.error_message_check}>
              <p> {errors?.checkbox?.message}</p>
            </div>
          ) : null}
        </div>
        <button className={classes.submit_button} disabled={loading}>
          Create
        </button>
      </form>

      <span className={classes.have_an_account}>
        Already have an account?&nbsp;
        <Link to="/sign-in" className={classes.sign_in}>
          Sign In.
        </Link>
      </span>
    </div>
  );
}
