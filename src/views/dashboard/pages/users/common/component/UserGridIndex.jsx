import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import UserGrid from '../element/UserGrid';
import { Grid } from '@mui/material';

const UserGridIndex = observer(({ data,  editLink , type}) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      {data.map((item, index) => {
        return (
          <Grid item key={index} xl={4} xxl={4} md={6} sm={12} xs={12}>
            <UserGrid item={item} editLink={editLink} type={type}/>
          </Grid>
        );
      })}
    </Grid>
  );
});

UserGridIndex.propTypes = {
  data: PropTypes.array.isRequired,
  editLink: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default UserGridIndex;
