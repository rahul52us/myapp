import { Avatar, Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import Typography from '../../../../component/Typography/Typography';
import { observer } from 'mobx-react-lite';
import ProfileImageUpload from '../../../../component/profileImageUpload/ProfileImageUpload';
import { useState } from 'react';
import store from '../../../../store/store';
import PropTypes from 'prop-types';
import CustomSkeleton from '../../../../component/LineSkeleton/LineSkeleton';

const ProfileImage = observer(({ initialValues, setInitialValues, fetchValues }) => {
  const {
    auth: { uploadUserPic },
  } = store;
  const [files, setFiles] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    if (files.length) {
      const form = new FormData();
      form.append('file', files[0]);
      uploadUserPic(form)
        .then((res) => {
          setInitialValues({ ...initialValues, pic: res.file });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [files]);

  return fetchValues ? (
    <div>
      <ProfileImageUpload files={files} setFiles={setFiles}>
        <Avatar
          src={files.length ? URL.createObjectURL(files[0]) : initialValues?.pic}
          sx={{
            width: useMediaQuery(theme.breakpoints.down('sm')) ? 180 : 220,
            height: useMediaQuery(theme.breakpoints.down('sm')) ? 180 : 220,
          }}
        />
      </ProfileImageUpload>
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', marginTop: 2 }}
        onClick={() => {
          setFiles([]);
        }}
      >
        upload profile
      </Typography>{' '}
    </div>
  ) : (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CustomSkeleton
          style={{
            width: useMediaQuery(theme.breakpoints.down('sm')) ? 180 : 220,
            height: useMediaQuery(theme.breakpoints.down('sm')) ? 180 : 220,
            borderRadius: '100%',
          }}
        />
        <CustomSkeleton style={{ width: '220px', marginTop: '15px' }} />
      </Box>
    </>
  );
});

ProfileImage.propTypes = {
  initialValues: PropTypes.object,
  setInitialValues: PropTypes.func,
  fetchValues: PropTypes.bool.isRequired,
};

export default ProfileImage;
