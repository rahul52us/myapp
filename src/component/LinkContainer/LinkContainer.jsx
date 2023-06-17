import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

const LinkContainer = observer(({ item, ...rest }) => {
  return (
    <Box {...rest}>
      <a href={item?.facebook} target="_blank" rel="noopener noreferrer">
        <IconButton title="facebook" color="red">
          <FacebookIcon />
        </IconButton>
      </a>
      <a href={item?.instagram} target="_blank" rel="noopener noreferrer">
        <IconButton title="instagram">
          <InstagramIcon />
        </IconButton>
      </a>
      <a href={item?.linkedIn} target="_blank" rel="noopener noreferrer">
        <IconButton title="linkedIn">
          <LinkedInIcon />
        </IconButton>
      </a>
      <a href={item?.twitter} target="_blank" rel="noopener noreferrer">
        <IconButton title="twitter">
          <TwitterIcon />
        </IconButton>
      </a>
      <a href={item?.youtube} target="_blank" rel="noopener noreferrer">
        <IconButton title="youtube">
          <YouTubeIcon />
        </IconButton>
      </a>
    </Box>
  );
});

LinkContainer.propTypes = {
  item: PropTypes.object,
};

export default LinkContainer;
