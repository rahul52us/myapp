import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { observer } from 'mobx-react-lite';
import Typography from '../../../../../../../component/Typography/Typography';
import store from '../../../../../../../store/store';

const ToggleButtons = observer(() => {
  const {
    layout: { changeThemeMode },
  } = store;
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{ marginTop: 1 }}
    >
      <ToggleButton
        value="left"
        aria-label="left aligned"
        sx={{ padding: 1, borderRadius: 1 }}
        onClick={() => changeThemeMode('light')}
      >
        <Typography sx={{ padding: 1, marginRight: 1 }}>Light </Typography> <LightModeIcon />
      </ToggleButton>
      <ToggleButton
        value="center"
        aria-label="centered"
        sx={{ padding: 1, borderRadius: 1 }}
        onClick={() => changeThemeMode('dark')}
      >
        <Typography sx={{ padding: 1, marginRight: 1 }}>Dark </Typography> <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
});

export default ToggleButtons;
