import React from 'react';
import CustomDrawer from '../../../../component/Drawer/Drawer';
import PropTypes from 'prop-types';
import Typography from '../../../../component/Typography/Typography';
import CustomButton from '../../../../component/Button/Button';

const DashSetting = ({ open, setOpen, title, showType, setShowType }) => {
  console.log(showType)
  return (
    <CustomDrawer open={open} setOpen={setOpen} anchor="right">
      <Typography>{title}</Typography>
      <CustomButton variant="contained" onClick={() => setShowType('grid')}>Grid</CustomButton>
      <CustomButton variant="contained" onClick={() => setShowType('table')}>Table</CustomButton>
    </CustomDrawer>
  );
};

DashSetting.propTypes = {
  open: PropTypes.any.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  showType: PropTypes.string.isRequired,
  setShowType: PropTypes.func.isRequired,
};
export default DashSetting;
