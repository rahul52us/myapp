import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

const NotificationContent = () => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer',
          },
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={`Brunch this weekend ? `}
          secondary={
            <React.Fragment>{`— I'll be in your neighborhood doing errands this…`}</React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default NotificationContent;
