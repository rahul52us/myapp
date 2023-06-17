import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Formik } from 'formik';
import Input from '../../../component/Input/Input';
import { LoginValidation } from '../../../config/utils/validation/validation';
import store from '../../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Person, Lock, LockOpen } from '@mui/icons-material';
import Typography from '../../../component/Typography/Typography';
import styled from 'styled-components';
import { useDeviceInfo } from '../../../component/CustomHooks/useDevice';
import CustomButton from '../../../component/Button/Button';
import { handleSuccessMessage, handleErrorMessage } from '../../../views/utils/function';
import { authRoute } from '../../../config/routes/authenticate_constant_route';

const Login = observer(() => {
  const initialValues = useState({
    username: '',
    password: '',
    remember_me: true,
  })[0];

  const { isLgDown } = useDeviceInfo();
  const {
    auth: { login },
  } = store;
  const navigate = useNavigate();
  const [showError, setShowError] = useState(null);

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);
    login(values)
      .then((data) => {
        handleSuccessMessage({ message: data?.message, type: 'sucess' });
        navigate('/');
      })
      .catch((err) => {
        handleErrorMessage(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <LoginMainContainer isLgDown={isLgDown}>
      <TitleContainer isLgDown={isLgDown}>
        <Typography variant="h2">Welcome to Smart</Typography>
        <div className="link-wrapper">
          <Link to={authRoute.REGISTER}>Need to create an account ?</Link>
        </div>
        <Typography variant="h5">Sign in</Typography>
      </TitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidation}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={2}>
              <Grid item xl={12} xs={12} md={12} sm={12} xxl={12}>
                <Input
                  value={values.username}
                  name="username"
                  placeholder="Enter the username"
                  onChange={handleChange}
                  error={errors.username}
                  onBlur={handleBlur}
                  showerror={showError ? true : null}
                  label="Username"
                  icon={<Person />}
                />
              </Grid>
              <Grid item xl={12} xs={12} md={12} sm={12} xxl={12} mt={2}>
                <Input
                  placeholder="Enter the password"
                  type="password"
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  error={errors.password}
                  showerror={showError ? true : null}
                  label="Password"
                  icon={errors.password ? <Lock /> : <LockOpen />}
                />
              </Grid>
            </Grid>
            <Grid item xl={12} xs={12} md={12} sm={12} xxl={12}>
              <Grid
                container
                mt={'1.5rem'}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Grid item>
                  <Input
                    type="checkbox"
                    name="remember_me"
                    onChange={handleChange}
                    value={values.remember_me ? true : false}
                    error={errors.remember_me}
                    showerror={showError ? true : null}
                    label="Remember Me"
                  />
                </Grid>
                <Grid item>
                  <Link to={authRoute.FORGOT_PASSWORD}>Forgot Password</Link>
                </Grid>
              </Grid>
            </Grid>
            <CustomButton
              sx={{ width: '100%', margin: '1rem 0rem' }}
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              onClick={() => setShowError('true')}
            >
              Submit
            </CustomButton>
          </form>
        )}
      </Formik>
    </LoginMainContainer>
  );
});

const LoginMainContainer = styled.div`
  padding: ${(props) => (props.isLgDown ? '2rem' : '0.5rem')};
  margin-top: ${(props) => (props.isLgDown ? '1rem' : '20vh')};
`;
const TitleContainer = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .link-wrapper {
    margin-bottom: 1rem;
    a {
      font-size: 1.2rem;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Login;
