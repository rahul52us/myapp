import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
} from '@mui/material';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const PermissionContent = ({ values, setFieldValue }) => {
  const setPermission = useCallback((e, index, label) => {
    var data = {};
    values.permission[label].splice(index, 1, e.target.value === 'true' ? true : false);
    data[label] = values.permission[label];
    setFieldValue('permission', {
      ...values.permission,
      ...data,
    });
  }, []);

  const getLable = useCallback((index) => {
    switch (index) {
      case 0:
        return 'Get';
      case 1:
        return 'Create';
      case 2:
        return 'Update';
      case 3:
        return 'View';
      default:
        return 'unknown';
    }
  }, []);

  return (
    <Box mt={5} ml={5}>
      <FormControl component="fieldset" className="formControl">
        {Object.entries(values.permission).map((item, index) => {
          return (
            <div key={index}>
              <FormLabel component="legend">{item[0]}</FormLabel>
              <FormGroup>
                <Grid mt={1} mb={1}>
                  {item[1].map((dt, ind) => {
                    return (
                      <FormControlLabel
                        key={ind}
                        control={
                          <Checkbox
                            checked={dt}
                            value={!dt}
                            onChange={(e) => setPermission(e, ind, item[0])}
                          />
                        }
                        label={getLable(ind)}
                      />
                    );
                  })}
                </Grid>
              </FormGroup>
            </div>
          );
        })}
      </FormControl>
    </Box>
  );
};

PermissionContent.propTypes = {
  values: PropTypes.any,
  setFieldValue: PropTypes.func,
};

export default PermissionContent;
