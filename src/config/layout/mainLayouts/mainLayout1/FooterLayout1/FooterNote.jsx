import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../../component/Typography/Typography';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { observer } from 'mobx-react-lite';
import store from '../../../../../store/store';

const FooterNote = observer(() => {
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  const {
    WebStore: { web },
  } = store;
  return (
    <FooterNoteContainer sizeStatus={sizeStatus}>
      <FooterNoteContain sizeStatus={sizeStatus}>
        <Typography
          sx={{ textAlign: sizeStatus ? 'center' : 'start', fontSize: sizeStatus ? '12px' : '' }}
        >
          Copyright © 2022 {web?.webName}. All right reserved
        </Typography>
        <LinkContainer sizeStatus={sizeStatus}>
          <Box sx={{ display: 'flex', justifyContent: 'center', ml: -2 }}>
            <a href={web?.facebook} target="_blank" rel="noopener noreferrer">
              <IconButton title="facebook">
                <FacebookIcon />
              </IconButton>
            </a>
            <a href={web?.instagram} target="_blank" rel="noopener noreferrer">
              <IconButton title="instagram">
                <InstagramIcon />
              </IconButton>
            </a>
            <a href={web?.linkedIn} target="_blank" rel="noopener noreferrer">
              <IconButton title="linkedIn">
                <LinkedInIcon />
              </IconButton>
            </a>
            <a href={web?.twitter} target="_blank" rel="noopener noreferrer">
              <IconButton title="twitter">
                <TwitterIcon />
              </IconButton>
            </a>
            <a href={web?.youtube} target="_blank" rel="noopener noreferrer">
              <IconButton title="youtube">
                <YouTubeIcon />
              </IconButton>
            </a>
          </Box>
        </LinkContainer>
      </FooterNoteContain>
    </FooterNoteContainer>
  );
});

export default FooterNote;

const FooterNoteContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '80px',
});

const FooterNoteContain = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: (props) => (props.sizeStatus ? 'column' : ''),
  justifyContent: (props) => (props.sizeStatus ? 'center' : 'space-between'),
});

const LinkContainer = styled.div({
  marginTop: (props) => (props.sizeStatus ? '2px' : '0'),
});
