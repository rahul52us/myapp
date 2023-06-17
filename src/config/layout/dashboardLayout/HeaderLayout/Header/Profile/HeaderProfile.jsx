import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import Tooltip from '../../../../../../component/Tooltip/Tooltip';
import { DashboardCustomizeOutlined, Logout } from '@mui/icons-material';
import store from '../../../../../../store/store';
import { useNavigate } from 'react-router-dom';
import { authRoute } from '../../../../../routes/authenticate_constant_route';

const HeaderProfile = observer(() => {
  const navigate = useNavigate();
  const {
    auth: { user, doLogout , checkPermission},
    layout: { resetLayout },
  } = store;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogoutFunction = useCallback(() => {
    doLogout();
    navigate(authRoute.LOGIN);
  }, []);

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {user ? (
            <Avatar
              src={user?.pic}
              alt={`${user?.firstName} ${user?.lastName}`}
              sx={{ width: 32, height: 32 }}
            />
          ) : (
            <Avatar sx={{ width: 32, height: 32 }} />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            backgroundColor: 'primary.main',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'primary.main',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate('/profile')}>
          <Avatar src={user?.pic} /> Profile
        </MenuItem>
        <Divider />
        {checkPermission({key : 'dashboard', value : 0}) && (
          <MenuItem onClick={() => navigate('/dashboard')}>
            <ListItemIcon>
              <DashboardCustomizeOutlined />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        )}
        {checkPermission({key : 'dashboard', value : 0}) && <Divider />}
        <MenuItem
          onClick={() => {
            LogoutFunction();
            resetLayout();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
});

export default HeaderProfile;
