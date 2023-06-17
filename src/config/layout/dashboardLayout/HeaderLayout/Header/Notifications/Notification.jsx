import NotificationContent from './element/NotificationContent';
import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Fade, Grid, IconButton, List, Popper } from '@mui/material';
import { ArrowRightAlt, CloseOutlined, NotificationAddOutlined } from '@mui/icons-material';
import Tooltip from '../../../../../../component/Tooltip/Tooltip';
import Typography from '../../../../../../component/Typography/Typography';
import styled from 'styled-components';

const NotificationWrapper = styled(Box)`
  background-color: #3f51b5;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const NotificationTitle = styled(Typography)`
  color: #ffffff;
`;

const NotificationListContainer = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: #ffffff;
  max-height: 400px;
  overflow-y: auto;
`;

const ViewAllButton = styled(IconButton)`
  color: #ffffff;
`;

const CloseButton = styled(IconButton)`
  color: #ffffff;
  margin-left: auto;
`;

const Notification = observer(() => {
  const [openNotification, setOpenNotification] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const canBeOpen = openNotification && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  const popperRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenNotification(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (event) => {
    setOpenNotification(!openNotification);
    setAnchorEl(event?.currentTarget);
  };

  return (
    <>
      <Tooltip title="Notification">
        <IconButton id={id} onClick={handleNotificationClick} ref={buttonRef}>
          <NotificationAddOutlined />
        </IconButton>
      </Tooltip>
      <Popper
        id={id}
        open={openNotification}
        anchorEl={anchorEl}
        transition
        placement="bottom-start"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <NotificationWrapper ref={popperRef}>
              <Grid container alignItems="center">
                <Grid item sm={8} xs={8}>
                  <NotificationTitle variant="h6">Notifications</NotificationTitle>
                </Grid>
                <Grid item sm={4} xs={4} container justifyContent="flex-end">
                  <Typography variant="body1">View All</Typography>
                  <CloseButton onClick={() => handleNotificationClick(null)}>
                    <CloseOutlined />
                  </CloseButton>
                </Grid>
              </Grid>
              <NotificationListContainer>
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return <NotificationContent key={index} />;
                })}
              </NotificationListContainer>
              <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body1">View All</Typography>
                </Grid>
                <Grid item>
                  <ViewAllButton>
                    <ArrowRightAlt />
                  </ViewAllButton>
                </Grid>
              </Grid>
            </NotificationWrapper>
          </Fade>
        )}
      </Popper>
    </>
  );
});

export default Notification;
