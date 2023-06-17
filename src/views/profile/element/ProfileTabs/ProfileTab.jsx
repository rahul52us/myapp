import React from 'react';
import PropTypes from 'prop-types';
import ProTabButton from './subElement/Tab/ProTabButton';
import CustomSkeleton from '../../../../component/LineSkeleton/LineSkeleton';

const ProfileTab = ({ currentTab, setCurrentTab, fetchValues }) => {
  const contents = [
    { title: 'Profile Content', id: 0 },
    { title: 'Addresses ', id: 1 },
    { title: 'Details', id: 2 },
    { title: 'Permissions', id: 3 },
  ];
  return fetchValues
    ? contents.map((item, index) => {
        return (
          <ProTabButton
            item={item}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            key={index}
          />
        );
      })
    : [...Array(4)].map((_, i) => {
        return (
          <CustomSkeleton key={i} style={{ width: '100%', height: '40px', marginTop: '15px' }} />
        );
      });
};

ProfileTab.propTypes = {
  currentTab: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
  fetchValues: PropTypes.bool.isRequired,
};
export default ProfileTab;
