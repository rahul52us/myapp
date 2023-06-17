import * as React from 'react';
import Popover from '@mui/material/Popover';
import SelectFilter from './SelectFilter';
import { Box, Grid } from '@mui/material';
import CustomDateRange from './CustomDateRange';
import CustomButton from '../../Button/Button';
import SelectStatus from './SelectStatus';
import StandardFilter from './StandardFilter';
import PropTypes from 'prop-types';
import { standards } from '../../../config/utils/profileConstant';

const TableFilter = ({
  selectedFilterValue,
  setSelectedFilterValue,
  handleSelectedFilterValue,
  openApplyFilter,
  setOpenApplyFilter,
  filterOptions,
  statusOptions,
}) => {
  const handleClick = (event) => {
    setOpenApplyFilter(event.currentTarget);
  };

  const handleClose = () => {
    setOpenApplyFilter(null);
  };

  const handleSelectedKey = (event) => {
    const filterValue = event.map((it) => it.value);

    setSelectedFilterValue((prevFilterValue) => {
      const updatedFilterValue = { ...prevFilterValue };

      if (!filterValue.includes('date_range')) {
        updatedFilterValue.startYear = undefined;
        updatedFilterValue.endYear = undefined;
      }

      if (!filterValue.includes('status')) {
        updatedFilterValue.status = 'ACCEPTED';
      }

      if (!filterValue.includes('standard')) {
        updatedFilterValue.standard = undefined;
      }

      updatedFilterValue.appliedSelectedFilter = event;
      return updatedFilterValue;
    });
  };

  const open = Boolean(openApplyFilter);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <CustomButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{ width: '350px' }}
      >
        Apply filter
      </CustomButton>
      <Popover
        sx={{ marginTop: '10px' }}
        id={id}
        open={open}
        anchorEl={openApplyFilter}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ width: '350px', minHeight: '130px' }} pb={2}>
          <SelectFilter
            options={filterOptions}
            handleSelectedKey={handleSelectedKey}
            selectKey={selectedFilterValue.appliedSelectedFilter}
          />
          {selectedFilterValue.appliedSelectedFilter.filter((item) => item.value === 'date_range')
            .length > 0 && (
            <CustomDateRange
              selectedFilterValue={selectedFilterValue}
              setSelectedFilterValue={setSelectedFilterValue}
            />
          )}

          {selectedFilterValue.appliedSelectedFilter.filter((item) => item.value === 'status')
            .length > 0 && (
            <SelectStatus
              selectedFilterValue={selectedFilterValue}
              setSelectedFilterValue={setSelectedFilterValue}
              options={statusOptions}
            />
          )}

          {selectedFilterValue.appliedSelectedFilter.filter((item) => item.value === 'standard')
            .length > 0 && (
            <StandardFilter
              selectedFilterValue={selectedFilterValue}
              setSelectedFilterValue={setSelectedFilterValue}
              options={standards}
            />
          )}
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
            <CustomButton
              variant="contained"
              sx={{ width: '180px' }}
              m={1}
              onClick={handleSelectedFilterValue}
            >
              Apply
            </CustomButton>
          </Grid>
        </Box>
      </Popover>
    </>
  );
};

TableFilter.propTypes = {
  selectedFilterValue: PropTypes.object.isRequired,
  setSelectedFilterValue: PropTypes.func.isRequired,
  handleSelectedFilterValue: PropTypes.func.isRequired,
  openApplyFilter: PropTypes.any,
  setOpenApplyFilter: PropTypes.func.isRequired,
  filterOptions: PropTypes.array,
  statusOptions: PropTypes.array,
};

export default TableFilter;
