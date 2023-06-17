import { observer } from 'mobx-react-lite';
import React from 'react';
import ProtoTypes from 'prop-types';
import Container from '../../../common/component/Container/Container';
import { Grid } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';

const GalleryTab = observer(({ galleryCategory }) => {
  return (
    <>
      <Container style={{ marginTop: '40px' }} containerWidth="60%">
        <Grid container columnSpacing={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {galleryCategory.map((item) => {
            return (
              <Grid item key={item.id}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container style={{ marginTop: '40px' }} containerWidth={'80%'}>
        <Grid container spacing={5}>
          {galleryCategory.length > 0 &&
            galleryCategory[3]?.Gallery?.map((gl) => {
              return (
                <Grid item key={gl.id} xl={4} xxl={4} md={6} sm={6} xs={12}>
                  <img src={gl.image} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
});

GalleryTab.propTypes = {
  galleryCategory: ProtoTypes.array,
};

export default GalleryTab;
