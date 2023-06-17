import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | knowledgeforcurious</title>
    </Helmet>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
