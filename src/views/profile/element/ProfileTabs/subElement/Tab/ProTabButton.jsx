import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../../../component/Typography/Typography';

const ProTabButton = ({ item, currentTab, setCurrentTab }) => {
  return (
    <div
      onClick={() => setCurrentTab(item.id)}
      style={{
        backgroundColor: currentTab === item.id ? 'red' : '',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      <Typography paragraph>{item.title}</Typography>
    </div>
  );
};

ProTabButton.propTypes = {
  item: PropTypes.object.isRequired,
  currentTab: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default ProTabButton;
