import React from 'react';
import { SquareIcon } from '../../../common/assets/images/squareIcon';
import styled from 'styled-components';
import Typography from '../../../../../../component/Typography/Typography';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const InfoElem = ({ title, description, order }) => {
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <InfoElemContainer sizeStatus={sizeStatus}>
      <Grid container p={1}>
        <Grid item xl={8} xxl={8} md={9} sm={10} xs={8} order={order}>
          <Grid container>
            <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: 1.5, marginBottom: 1 }} >
                {title}
              </Typography>
            </Grid>
            <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
              <Typography variant="p" sx={{ marginTop: '5px' }}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} xxl={4} md={2} sm={2} xs={4}>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </Grid>
      </Grid>
    </InfoElemContainer>
  );
};

InfoElem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  order: PropTypes.number,
};

export default InfoElem;

const InfoElemContainer = styled.div({
  marginTop: (props) => (props.sizeStatus ? '5px' : '30px'),
  span: {
    fontSize: '16px',
    color: 'gray',
  },
});

const ImageContainer = styled.div({
  backgroundColor: 'green',
  width: '120px',
  height: '120px',
  position: 'relative',
});

const Image = styled.div({
  objectFit: 'contain',
  backgroundPosition: 'center center',
  height: '120px',
  width: '100%',
  background: `url(${SquareIcon})`,
});
