import { Grid } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react';
import Input from '../../../component/Input/Input';
import { Person, Lock, LockOpen } from '@mui/icons-material';
import { RegisterValidation } from '../../../config/utils/validation/validation';
import CustomButton from '../../../component/Button/Button';
import styled from 'styled-components';
import { useDeviceInfo } from '../../../component/CustomHooks/useDevice';
import Typography from '../../../component/Typography/Typography';
import { authRoute } from '../../../config/routes/authenticate_constant_route';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showError, setShowError] = useState(false);
  const { isLgDown } = useDeviceInfo();
  const initialValues = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    remember_me: true,
  })[0];

  const handleSubmit = (values, setSubmitting) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <RegisterContainer isLgDown={isLgDown}>
      <TitleContainer isLgDown={isLgDown}>
        <Typography variant="h2">Welcome to Smart</Typography>
        <div className="link-wrapper">
          <Link to={authRoute.LOGIN}>have Already an Account ?</Link>
        </div>
        <Typography variant="h5">Register Account</Typography>
      </TitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterValidation}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ values, handleSubmit, handleChange, isSubmitting, errors, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item xl={6} xxl={6} md={12} sm={12} xs={12}>
                <Input
                  type="text"
                  label="First Name"
                  placeholder="Firstname"
                  icon={<Person />}
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  showerror={showError ? true : null}
                  error={errors.firstName}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xl={6} xxl={6} md={12} sm={12} xs={12}>
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Lastname"
                  icon={<Person />}
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  showerror={showError ? true : null}
                  error={errors.lastName}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={12} sm={12} xxl={12} xl={12}>
                <Input
                  type="text"
                  label="User Name"
                  placeholder="Username"
                  icon={<Person />}
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  showerror={showError ? true : null}
                  error={errors.username}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={12} sm={12} xxl={12} xl={12}>
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
              <Grid item xs={12} md={12} sm={12} xxl={12} xl={12}>
                <CustomButton
                  sx={{ width: '100%', margin: '1rem 0rem' }}
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={() => setShowError('true')}
                >
                  Submit
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  padding: ${(props) => (props.isLgDown ? '2rem' : '0.5rem')};
  margin-top: ${(props) => (props.isLgDown ? '1rem' : '18vh')};
`;
const TitleContainer = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
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
  h5 {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
