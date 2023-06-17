import { Formik } from 'formik';
import React, { useState } from 'react';
import CustomInput from '../../../../../component/Input/Input';
import PropTypes from 'prop-types';
import CustomFormButton from '../../../../../component/common/CustomFormButton/CustomFormButton';
import { Avatar, Grid } from '@mui/material';
import TestimonialValidation from './utils/validation';
import DialogBox from '../../../../../component/Dialog/Dialog';
import ProfileImageUpload from '../../../../../component/profileImageUpload/ProfileImageUpload';

const TestimonialForm = ({ initialValues, submitForm, loading, closeForm, title , files , setFiles, picFile, setPicFile  }) => {
  const [showError, setShowError] = useState(null);

  return (
    <DialogBox open={true} close={closeForm} title={title}>
      <Formik
        initialValues={initialValues}
        validationSchema={TestimonialValidation}
        onSubmit={(values) => submitForm(values)}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid
                item
                xl={12}
                xxl={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ProfileImageUpload files={files} setFiles={setFiles} picFile={picFile} setPicFile={setPicFile} >
                   <Avatar sx={{ width: '200px', height: '200px' }} src={files.length ? URL.createObjectURL(files[0]) : picFile} />
                </ProfileImageUpload>
              </Grid>
              <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
                <CustomInput
                  label="Name"
                  name="name"
                  placeholder="Enter the Name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  showerror={showError}
                />
              </Grid>
              <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
                <CustomInput
                  label="Profession"
                  name="profession"
                  placeholder="Enter the Profession"
                  value={values.profession}
                  onChange={handleChange}
                  error={errors.profession}
                  showerror={showError}
                />
              </Grid>
              <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
                <CustomInput
                  label="Description"
                  name="description"
                  placeholder="Write Description here"
                  value={values.description}
                  onChange={handleChange}
                  error={errors.description}
                  rows={5}
                  multiline
                  showerror={showError}
                />
              </Grid>
            </Grid>
            <CustomFormButton
              submitButton={() => setShowError(true)}
              loading={loading}
              submitText={'Create'}
              cancelText="Cancel"
              cancelButton={closeForm}
            />
          </form>
        )}
      </Formik>
    </DialogBox>
  );
};

TestimonialForm.propTypes = {
  files: PropTypes.any,
  title: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  setFiles: PropTypes.func,
  picFile: PropTypes.any,
  setPicFile: PropTypes.func.isRequired
};

export default TestimonialForm;
