import React from 'react';
import Typography from '../../../component/Typography/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Tooltip from '../../../component/Tooltip/Tooltip';
import { CloseOutlined } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';

const DashboardNotePage = observer(() => {
  const {
    auth: { openNotification },
    layout: { showDashboardNote, setShowDashboardNode },
  } = store;
  const theme = useTheme();

  const undoDashboardNote = React.useCallback(() => {
    setShowDashboardNode(false);
    openNotification({
      message: 'user note is visible again',
      type: 'success',
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.backgroundNoteLightColor,
        display: !showDashboardNote ? 'flex' : 'none',
        alignItems: 'center',
        padding: 1,
        marginBottom: 2,
      }}
    >
      <Grid container>
        <Grid item sm={11} xs={11}>
          <Tooltip title="Read this Note">
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Typography
            variant="subtitle"
            sx={{
              color: 'primary.textColor',
              cursor: 'pointer',
              marginLeft: 1,
              fontWeight: 600,
              fontSize: useMediaQuery(theme.breakpoints.down('md')) ? 12 : 15,
            }}
          >
            This page is only visible by authenticated users, never share your credentials to
            anyone.
          </Typography>
        </Grid>
        <Grid item sm={1} xs={1}>
          <Tooltip title="remove this note">
            <IconButton
              onClick={() => {
                openNotification(
                  {
                    message: 'user note has been removed successfully ',
                    type: 'success',
                  },
                  () => undoDashboardNote(),
                );
                setShowDashboardNode(true);
              }}
            >
              <CloseOutlined />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
});

export default DashboardNotePage;
