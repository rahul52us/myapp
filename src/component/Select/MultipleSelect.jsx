import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MultipleSelect({ options = [], label, ...rest }) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
          {...rest}
        >
          {options.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

MultipleSelect.defaultTypes = {
  options: [],
};

MultipleSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
};

export default MultipleSelect;
