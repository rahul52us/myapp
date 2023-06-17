import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import CustomInput from '../../../../component/Input/Input';
import Select from '../../../../component/Select/Select';
import { Medium, genders, standards } from '../../../../config/utils/profileConstant';
import PropTypes from 'prop-types';
import {
  AccountCircle,
  Create,
  Description,
  Male,
  Person,
  Person2,
  Phone,
  School,
  Lock,
  LockOpen,
} from '@mui/icons-material';

const ProfileContent = observer(
  ({ handleChange, values, errors, setFieldValue, type, showerror, userType }) => {
    return (
      <>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            label="First Name"
            placeholder="Enter the First Name"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            error={errors.firstName}
            showerror={showerror}
            icon={<Person fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            label="Last Name"
            placeholder="Enter the Last Name"
            name="lastName"
            value={values.lastName}
            error={errors.lastName}
            onChange={handleChange}
            showerror={showerror}
            icon={<Person fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            label="User Name"
            placeholder="Enter the User Name"
            name="username"
            value={values.username}
            error={errors.username}
            onChange={handleChange}
            disabled={type === 'edit' ? true : false}
            showerror={showerror}
            icon={<AccountCircle fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            label="Nick Name"
            placeholder="Enter the Nick Name"
            name="nickName"
            value={values.nickName}
            error={errors.nickName}
            onChange={handleChange}
            showerror={showerror}
            icon={<Person fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            type="date"
            name="dob"
            value={values.dob}
            label="Select the DOB"
            placeholder="Select the DOB"
            onChange={(e) => setFieldValue('dob', e.target.value)}
            errors={errors.dob}
            showerror={showerror}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <Select
            name="gender"
            value={values.gender}
            placeholder="Select the Gender"
            options={genders}
            onChange={(e) => setFieldValue('gender', e)}
            error={errors.gender}
            showerror={showerror}
            icon={<Male fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            label="Father Name"
            placeholder="Enter the Father Name"
            name="fatherName"
            value={values.fatherName}
            error={errors.fatherName}
            onChange={handleChange}
            showerror={showerror}
            icon={<Person fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            label="Mother Name"
            placeholder="Enter the Mother Name"
            name="motherName"
            value={values.motherName}
            error={errors.motherName}
            onChange={handleChange}
            showerror={showerror}
            icon={<Person fontSize="small" />}
          />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={6} xs={12}>
          <CustomInput
            type="number"
            label="Sibling"
            placeholder="Sibling"
            name="sibling"
            value={values.sibling}
            error={errors.sibling}
            onChange={handleChange}
            showerror={showerror}
            icon={<Person2 fontSize="small" />}
          />
        </Grid>
        {userType === 'student' && (
          <>
            <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
              <Select
                name="medium"
                value={values.medium}
                // label="Select the Medium"
                placeholder="Select the Medium"
                options={Medium}
                onChange={(e) => setFieldValue('medium', e)}
                error={errors.medium}
                showerror={showerror}
                icon={<Create fontSize="small" />}
              />
            </Grid>
            <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
              <Select
                name="standard"
                value={values.standard}
                // label="Select the Standard"
                placeholder="Select the Standard"
                options={standards}
                onChange={(e) => setFieldValue('standard', e)}
                error={errors.standard}
                showerror={showerror}
                icon={<School fontSize="small" />}
              />
            </Grid>
            <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
              <CustomInput
                type="date"
                name="startYear"
                value={values.startYear}
                label="Select the Start Year"
                placeholder="Select the Start Year"
                onChange={(e) => setFieldValue('startYear', e.target.value)}
                errors={errors.startYear}
                showerror={showerror}
              />
            </Grid>
            <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
              <CustomInput
                type="date"
                name="endYear"
                value={values.endYear}
                label="Select the End Year"
                placeholder="Select the End Year"
                onChange={(e) => setFieldValue('endYear', e.target.value)}
                errors={errors.endYear}
                showerror={showerror}
              />
            </Grid>
          </>
        )}
        <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
          <CustomInput
            type="text"
            label="Phone Number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            error={errors.phoneNumber}
            onChange={handleChange}
            showerror={showerror}
            icon={<Phone fontSize="small" />}
          />
        </Grid>
        <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
          <CustomInput
            type="text"
            label="Emergency Number"
            placeholder="Emergency Number"
            name="emergencyNumber"
            value={values.emergencyNumber}
            error={errors.emergencyNumber}
            onChange={handleChange}
            showerror={showerror}
            icon={<Phone fontSize="small" />}
          />
        </Grid>
        {type !== 'edit' && (
          <>
            <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
              <CustomInput
                type="password"
                label="Password"
                placeholder="Enter the Password"
                name="password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
                showerror={showerror}
                icon={<Lock fontSize="small" />}
              />
            </Grid>
            <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
              <CustomInput
                type="password"
                label="Confirm Password"
                placeholder="Enter the Confirm Password"
                name="confirm_password"
                value={values.confirm_password}
                error={errors.confirm_password}
                onChange={handleChange}
                showerror={showerror}
                icon={<LockOpen fontSize="small" />}
              />
            </Grid>
          </>
        )}
        <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
          <CustomInput
            label="Description"
            placeholder="Description"
            name="description"
            value={values.description}
            error={errors.description}
            onChange={handleChange}
            rows={3}
            multiline
            showerror={showerror}
            icon={<Description fontSize="small" />}
          />
        </Grid>
      </>
    );
  },
);

ProfileContent.propTypes = {
  values: PropTypes.any,
  errors: PropTypes.any,
  handleChange: PropTypes.func,
  setFieldValue: PropTypes.func,
  type: PropTypes.string.isRequired,
  showerror: PropTypes.any,
  userType: PropTypes.string,
};

export default ProfileContent;
