import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const PlaygroundSpeedDial = ({ createLink  }) => {
  const navigate = useNavigate();
  const [direction] = React.useState('left');
  const [hidden,setHidden] = React.useState(false);

  const handleClickEvent = (action) => {
    if(action.islink)
    {
      setHidden(true)
      setTimeout(() => {
        navigate(action.link)
      },500)
    }
  }

  const actions = [
    { icon: <FileCopyIcon />, name: 'Create', link: createLink , islink : true },
    { icon: <SaveIcon />, name: 'Save', link: '#' },
    { icon: <PrintIcon />, name: 'Download', link: handleClickEvent },
    { icon: <ShareIcon />, name: 'Share', link: '#' },
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        hidden={hidden}
        icon={<SpeedDialIcon />}
        direction={direction}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClickEvent(action)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
};

PlaygroundSpeedDial.propTypes = {
  createLink: PropTypes.string.isRequired,
};

export default PlaygroundSpeedDial;
