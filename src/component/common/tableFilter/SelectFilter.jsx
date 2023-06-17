import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types'
import { FormLabel } from '@mui/material';
import Select from '../../Select/Select'
import { Search } from '@mui/icons-material';


function MultipleSelectChip({selectKey, options, handleSelectedKey, ...rest}) {

  return (
      <FormControl sx={{ p: 1, width: 350 }}>
        <FormLabel>Tags</FormLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          placeholder='Select the filter'
          isMulti
          value={selectKey}
          onChange={handleSelectedKey}
          options={options}
          icon={<Search fontSize='small'/>}
          {...rest}
          />
      </FormControl>
  );
}

MultipleSelectChip.propTypes = {
  selectKey:PropTypes.array.isRequired,
  options : PropTypes.array.isRequired,
  handleSelectedKey : PropTypes.func.isRequired
}

export default MultipleSelectChip;