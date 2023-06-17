import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../../../../component/Input/Input';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import {
  LocationOn as LocationOnIcon,
  Public as PublicIcon,
  LocationCity as LocationCityIcon,
  LocalPostOffice,
} from '@mui/icons-material';

const AddressContent = observer(({ handleChange, values, errors, showerror }) => {
  return (
    <>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="Address 1"
          placeholder="Enter the Address 1"
          name="address1"
          onChange={handleChange}
          value={values.address1}
          error={errors.address1}
          showerror={showerror}
          icon={<LocationOnIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="Address 2"
          placeholder="Enter the Address 2"
          name="address2"
          onChange={handleChange}
          value={values.address2}
          error={errors.address2}
          showerror={showerror}
          icon={<LocationOnIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="Country"
          placeholder="Select the Country"
          name="country"
          onChange={handleChange}
          value={values.country}
          error={errors.country}
          showerror={showerror}
          icon={<PublicIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="State"
          placeholder="Select the State"
          name="state"
          onChange={handleChange}
          value={values.state}
          error={errors.state}
          showerror={showerror}
          icon={<LocationOnIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="City"
          placeholder="Select the City"
          name="city"
          onChange={handleChange}
          value={values.city}
          error={errors.city}
          showerror={showerror}
          icon={<LocationCityIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="Zip Code"
          placeholder="Select the Zip Code"
          name="zipCode"
          onChange={handleChange}
          value={values.zipCode}
          error={errors.zipCode}
          showerror={showerror}
          icon={<LocalPostOffice fontSize='small'/>}
        />
      </Grid>
    </>
  );
});

AddressContent.propTypes = {
  values: PropTypes.any,
  errors: PropTypes.any,
  handleChange: PropTypes.func,
  showerror: PropTypes.any,
};

export default AddressContent;
