import React from 'react';
import CustomPaper from '../../../../../component/Paper/Paper';
import { Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';
import CustomInput from '../../../../../component/Input/Input';
import CustomButton from '../../../../../component/Button/Button';
import { AddOutlined, Settings } from '@mui/icons-material';
import TableFilter from '../../../../../component/common/tableFilter/TableFilter';
import PropTypes from 'prop-types';

const TableCustomFilter = ({
  createLink,
  setOpenSetting,
  openSetting,
  selectedFilterValue,
  setSelectedFilterValue,
  handleSelectedFilterValue,
  handleSearch,
  openApplyFilter,
  setOpenApplyFilter,
  filterOptions,
  statusOptions
}) => {
  const theme = useTheme();
  const status = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <CustomPaper sx={{ p: 1.5, mb: 1.5 }}>
      <Grid
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        container
      >
        <Grid item xxl={3} xl={3} md={0} sm={0} xs={0} sx={{ display: status ? 'none' : '' }}>
          <TableFilter setSelectedFilterValue={setSelectedFilterValue} selectedFilterValue={selectedFilterValue} handleSelectedFilterValue={handleSelectedFilterValue} openApplyFilter={openApplyFilter} setOpenApplyFilter={setOpenApplyFilter} filterOptions={filterOptions} statusOptions={statusOptions}/>
        </Grid>
        <Grid item xxl={7} xl={7} md={10} sm={8} xs={6}>
          <CustomInput
            placeholder="Search here by name and username ...."
            label="Search here ...."
            name="search"
            value={selectedFilterValue.searchQuery}
            onChange={handleSearch}
            sx={{ width: '100%' }}
            variant="outlined"
            size="small"
            icon={<Search fontSize="small" />}
          />
        </Grid>
        <Grid
          item
          xxl={2}
          xl={2}
          md={2}
          sm={4}
          xs={5}
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <CustomButton
            disabled={false}
            sx={{ display: 'none' }}
          >
            Download Templates
          </CustomButton>
          <CustomButton sx={{ display: 'none' }}>Download</CustomButton>
          <CustomButton variant="contained" onClick={createLink}>
            {' '}
            Create <AddOutlined sx={{ ml: 2 }} />{' '}
          </CustomButton>
          <IconButton title="view features" onClick={() => setOpenSetting(!openSetting)}>
            <Settings />
          </IconButton>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

TableCustomFilter.propTypes = {
  createLink: PropTypes.func.isRequired,
  setOpenSetting: PropTypes.func.isRequired,
  openSetting: PropTypes.bool.isRequired,
  selectedFilterValue: PropTypes.object.isRequired,
  setSelectedFilterValue: PropTypes.func.isRequired,
  handleSelectedFilterValue:PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  openApplyFilter:PropTypes.any,
  setOpenApplyFilter:PropTypes.func.isRequired,
  filterOptions: PropTypes.array,
  statusOptions: PropTypes.array
};

export default TableCustomFilter;
