import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { Grid } from '@mui/material';
import CustomInput from '../../../../component/Input/Input';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  MailOutline as MailOutlineIcon,
  Videocam as VideocamIcon,
  Work as WorkIcon,
  Star as StarIcon,
  Subject as SubjectIcon,
  Photo as PhotoIcon,
  Image as ImageIcon,
  LinkedIn,
} from '@mui/icons-material';

const DetailsContent = observer(({ handleChange, values, errors, showerror, userType }) => {
  return (
    <>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="Facebook"
          placeholder="Enter the Facebook link"
          name="facebook"
          onChange={handleChange}
          value={values.facebook}
          error={errors.facebook}
          showerror={showerror}
          icon={<FacebookIcon fontSize='small' />}
        />
      </Grid>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="Instagram"
          placeholder="Enter the Instagram link"
          name="instagram"
          onChange={handleChange}
          value={values.instagram}
          error={errors.instagram}
          showerror={showerror}
          icon={<InstagramIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="LinkedIn"
          placeholder="Enter the LinkedIn link"
          name="linkedIn"
          onChange={handleChange}
          value={values.linkedIn}
          error={errors.linkedIn}
          showerror={showerror}
          icon={<LinkedIn fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="Twitter"
          placeholder="Enter the Twitter link"
          name="twitter"
          onChange={handleChange}
          value={values.twitter}
          error={errors.twitter}
          showerror={showerror}
          icon={<TwitterIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="Youtube"
          placeholder="Enter the Youtube link"
          name="youtube"
          onChange={handleChange}
          value={values.youtube}
          error={errors.youtube}
          showerror={showerror}
          icon={<YouTubeIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="Gmail"
          placeholder="Enter the Gmail link"
          name="gmail"
          onChange={handleChange}
          value={values.gmail}
          error={errors.gmail}
          showerror={showerror}
          icon={<MailOutlineIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
        <CustomInput
          label="Refrence Video"
          placeholder="Enter the Refrence Video Link"
          name="refrenceVideo"
          onChange={handleChange}
          value={values.refrenceVideo}
          error={errors.refrenceVideo}
          showerror={showerror}
          icon={<VideocamIcon fontSize='small'/>}
        />
      </Grid>
      {(userType === 'teacher' || userType === 'staff') && (
        <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
          <CustomInput
            label="Profession"
            placeholder="Enter the Profession"
            name="profession"
            onChange={handleChange}
            value={values.profession}
            error={errors.profession}
            showerror={showerror}
            icon={<WorkIcon fontSize='small'/>}
          />
        </Grid>
      )}
      {userType === 'teacher' && (
        <>
          <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
            <CustomInput
              label="Expirience"
              placeholder="Enter the Expirience"
              name="expirience"
              onChange={handleChange}
              value={values.expirience}
              error={errors.expirience}
              showerror={showerror}
              icon={<StarIcon fontSize='small'/>}
            />
          </Grid>
          <Grid item xl={6} xxl={6} md={6} sm={6} xs={12}>
            <CustomInput
              label="skill"
              placeholder="Enter the skill"
              name="skill"
              onChange={handleChange}
              value={values.skill}
              error={errors.skill}
              showerror={showerror}
              icon={<StarIcon fontSize='small'/>}
            />
          </Grid>
        </>
      )}
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="Details"
          placeholder="Details"
          name="details"
          value={values.details}
          error={errors.details}
          onChange={handleChange}
          rows={3}
          multiline
          showerror={showerror}
          icon={<SubjectIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="Picture"
          placeholder="Picture"
          name="picture"
          value={values.picture}
          error={errors.picture}
          onChange={handleChange}
          rows={3}
          multiline
          showerror={showerror}
          icon={<PhotoIcon fontSize='small'/>}
        />
      </Grid>
      <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
        <CustomInput
          label="BackgroundPicture"
          placeholder="Background Picture"
          name="backgroundPicture"
          value={values.backgroundPicture}
          error={errors.backgroundPicture}
          onChange={handleChange}
          rows={3}
          multiline
          showerror={showerror}
          icon={<ImageIcon fontSize='small'/>}
        />
      </Grid>
    </>
  );
});

DetailsContent.propTypes = {
  values: PropTypes.any,
  errors: PropTypes.any,
  handleChange: PropTypes.func,
  showerror: PropTypes.any,
  userType: PropTypes.string,
};
export default DetailsContent;
