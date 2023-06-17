import React, { useState } from 'react';
import Breadcrumbs from '../../component/Breadcrumb/Breadcrumb';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import CustomPaper from '../../component/Paper/Paper';
import { Grid } from '@mui/material';
import ProfileImage from './element/profileImage/ProfileImage';
import ProfileContentHeader from './component/profileContentHeader/ProfileContentHeader';
import ProfileContentIndex from './component/ProfileContent/ProfileContentIndex';
import PropTypes from 'prop-types';
import ProfileTab from './element/ProfileTabs/ProfileTab';
import SkeletanCard from '../../component/LineSkeleton/SkeletanCard';

const Profile = observer(
  ({
    initialValues,
    setInitialValues,
    fetchValues,
    submitFunction,
    type,
    validation,
    userType,
    profileLink,
  }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const {
      auth: { user },
    } = store;
    return (
      <>
        <Breadcrumbs
          data={[
            { link: '/', title: 'Home' },
            { title: `profile - ${user?.firstName} ${user?.lastName}` },
          ]}
        />
        <Grid container columnSpacing={3}>
          <Grid item xs={12} md={12} xl={3} xxl={2} sm={12}>
            <Grid container>
              <Grid item xl={12} md={12} xs={12} xxl={12}>
                <CustomPaper style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                  <ProfileImage
                    initialValues={initialValues}
                    setInitialValues={setInitialValues}
                    fetchValues={fetchValues}
                  />
                </CustomPaper>
              </Grid>
              <Grid item xl={12} md={12} xs={12} xxl={12} mt={5}>
                <CustomPaper sx={{marginBottom : '15px'}}>
                  <ProfileTab
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    fetchValues={fetchValues}
                  />
                </CustomPaper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} xl={9} xxl={10} sm={12}>
            <CustomPaper style={{ padding: '10px' }}>
              <ProfileContentHeader
                title="profile page"
                userType={userType}
                profileLink={profileLink}
              />
              {fetchValues ? (
                <ProfileContentIndex
                  setCurrentTab={setCurrentTab}
                  currentTab={currentTab}
                  initialValues={initialValues}
                  submitFunction={submitFunction}
                  type={type}
                  validation={validation}
                  userType={userType}
                  profileLink={profileLink}
                />
              ) : (
                <SkeletanCard row={30} variant="text" />
              )}
            </CustomPaper>
          </Grid>
        </Grid>
      </>
    );
  },
);

Profile.propTypes = {
  initialValues: PropTypes.object,
  setInitialValues: PropTypes.func,
  fetchValues: PropTypes.bool.isRequired,
  submitFunction: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  validation: PropTypes.any.isRequired,
  userType: PropTypes.string.isRequired,
  profileLink: PropTypes.string,
};

export default Profile;
