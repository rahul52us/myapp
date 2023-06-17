import React, { useState } from 'react';
import styled from 'styled-components';
import DialogBox from '../../../../../component/Dialog/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const StyledYoutubeVideo = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
`;

const YoutubeVideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;

const YoutubeVideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const OpenButton = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const CloseIconStyled = styled(CloseIcon)`
  color: #fff;
`;

const CustomDialog = styled(DialogBox)`
  .MuiDialog-paper {
    width: 90%;
    max-width: 800px;
    height: auto;
  }
`;

const YoutubeVideo = () => {
  const [open, setOpen] = useState(false);
  const videoId = '1gOD13vvgnY'; // Replace with your YouTube video ID

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledYoutubeVideo>
      <OpenButton onClick={handleOpen}>Open Video</OpenButton>
      <CustomDialog open={open} close={handleClose}>
        <CloseButton onClick={handleClose}>
          <CloseIconStyled />
        </CloseButton>
        <YoutubeVideoContainer>
          <YoutubeVideoIframe
            title="YouTube Video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
          ></YoutubeVideoIframe>
        </YoutubeVideoContainer>
      </CustomDialog>
    </StyledYoutubeVideo>
  );
};

export default YoutubeVideo;
