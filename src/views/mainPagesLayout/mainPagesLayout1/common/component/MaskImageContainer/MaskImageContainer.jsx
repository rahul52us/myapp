import React from 'react';
import styled from 'styled-components';
import { MaskImage } from '../../assets/images/MaskImage';
import { Box, IconButton } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const MaskImageContainer = observer(({ item }) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <ImageContainer ImageCrop={MaskImage}>
        <img src={item?.ProfileDetails?.picture ? item?.ProfileDetails?.picture : item?.pic} alt="" />
        <CustomElement>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', textAlign: 'center' }}
              style={{ fontSize: '16px' }}
              onClick={() => navigate(item.link, { state: item?.id})}
            >
              {item?.firstName} {item?.lastName}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 600, textAlign: 'center', mt: -2 }}
              style={{ fontSize: '12px' }}
            >
              {item?.ProfileDetails?.profession}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', ml: -2 }}>
              {item?.ProfileDetails?.facebook && (
                <a href={item?.ProfileDetails?.facebook} target="_blank" rel="noreferrer">
                  <IconButton title="facebook">
                    <FacebookIcon />
                  </IconButton>
                </a>
              )}
              {item?.ProfileDetails?.instagram && (
                <a href={item?.ProfileDetails?.instagram} target="_blank" rel="noreferrer">
                  <IconButton title="instagram">
                    <InstagramIcon />
                  </IconButton>
                </a>
              )}
              {item?.ProfileDetails?.linkedIn && (
                <a href={item?.ProfileDetails?.linkedIn} target="_blank" rel="noreferrer">
                  <IconButton title="linkedIn">
                    <LinkedInIcon />
                  </IconButton>
                </a>
              )}
              {item?.ProfileDetails?.twitter && (
                <a href={item?.ProfileDetails?.twitter} target="_blank" rel="noreferrer">
                  <IconButton title="twitter">
                    <TwitterIcon />
                  </IconButton>
                </a>
              )}
              {item?.ProfileDetails?.youtube && (
                <a href={item?.ProfileDetails?.youtube} target="_blank" rel="noreferrer">
                  <IconButton title="youtube">
                    <YouTubeIcon />
                  </IconButton>
                </a>
              )}
            </Box>
          </Box>
        </CustomElement>
      </ImageContainer>
    </MainContainer>
  );
});

MaskImageContainer.propTypes = {
  item: PropTypes.object,
};

export default MaskImageContainer;

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const ImageContainer = styled.div({
  position: 'relative',
  img: {
    maskImage: (props) => `url(${props.ImageCrop})`,
    maskSize: '100%',
    maskRepeat: 'no-repeat',
    maskPosition: 'center center',
    display: 'block',
    width: '280px',
    height: '280px',
    opacity: 1,
    transition: 'opacity 0.8s ease-in-out',
  },
  '&:hover': {
    img: {
      opacity: 0.3,
    },
    '> div': {
      transition: 'all 0.8 ease-in-out',
      display: 'block',
    },
  },
});

const CustomElement = styled.div({
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'none',
  width: '60%',
  height: '50px',
  lineHeight: '50px',
  color: 'black',
  transition: 'opacity 0.8s ease-in-out',
  cursor: 'pointer',
});
