import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Formik } from 'formik';
import Button from '../../../../component/Button/Button';
import AddressContent from './AddressContent';
import ProfileContent from './ProfileContent';
import PropTypes from 'prop-types';
import PermissionContent from './PermissionContent';
import { useNavigate } from 'react-router-dom';
import DetailsContent from './DetailsContent';
import { handleSuccessMessage, handleErrorMessage } from '../../../utils/function';

const ProfileContentIndex = observer(
  ({
    initialValues,
    currentTab,
    setCurrentTab,
    submitFunction,
    type,
    validation,
    userType,
    profileLink,
  }) => {
    const [showerror, setShowError] = React.useState(null);
    const navigate = useNavigate();
    const theme = useTheme();

    const sendFormData = (values, setSubmitting) => {
      setSubmitting(true);
      submitFunction({
        ...initialValues,
        ...values,
        gender: values.gender?.value,
        medium: values.medium?.value,
        standard: values.standard?.value,
        pic: initialValues.pic,
      })
        .then((res) => {
          handleSuccessMessage(res);
          navigate(profileLink);
        })
        .catch((err) => {
          if (err.statusCode !== 422) {
            handleErrorMessage(err);
          } else {
            handleErrorMessage({ message: '422 error' });
          }
        })
        .finally(() => setSubmitting(false));
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => sendFormData(values, setSubmitting)}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={useMediaQuery(theme.breakpoints.down('sm')) ? 3 : 2}
              sx={{ height: 'auto', minHeight: '70vh' }}
            >
              {currentTab === 0 && (
                <ProfileContent
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  type={type}
                  userType={userType}
                  profileLink={profileLink}
                  showerror={type === 'edit' ? 'true' : showerror}
                />
              )}
              {currentTab === 1 && (
                <AddressContent
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  showerror={type === 'edit' ? 'true' : showerror}
                  userType={userType}
                />
              )}
              {currentTab === 2 && (
                <DetailsContent
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  showerror={type === 'edit' ? 'true' : showerror}
                  userType={userType}
                />
              )}
              {currentTab === 3 && (
                <PermissionContent
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  userType={userType}
                />
              )}
            </Grid>
            <Grid container mt={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item>
                {!(currentTab <= 0) && (
                  <Button sx={{ m: 1 }} onClick={() => setCurrentTab(currentTab - 1)}>
                    Previous
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Grid container>
                  {!(currentTab >= 3) && (
                    <Button sx={{ m: 1 }} onClick={() => setCurrentTab(currentTab + 1)}>
                      Next
                    </Button>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ m: 1 }}
                    onClick={() => setShowError('true')}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    );
  },
);

ProfileContentIndex.propTypes = {
  currentTab: PropTypes.number,
  setCurrentTab: PropTypes.func,
  initialValues: PropTypes.object.isRequired,
  submitFunction: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  validation: PropTypes.any.isRequired,
  userType: PropTypes.string.isRequired,
  profileLink: PropTypes.string,
};

export default ProfileContentIndex;
