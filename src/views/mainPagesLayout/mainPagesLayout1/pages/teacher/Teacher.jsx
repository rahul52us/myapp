import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import ContentBannner from '../../common/component/ContentBanner/ContentBanner';
import TitleContainer from '../../common/component/TitleContainer/TitleContainer';
import Container from '../../common/component/Container/Container';
import { backgroundCoverImage2 } from '../../common/assets/images/backgroundImageCover2';
import MaskImageContainer from '../../common/component/MaskImageContainer/MaskImageContainer';
import Carousel from '../../../../../component/Carousel/Carousel';
import ArrowButton from '../../common/component/ArrowButton/ArrowButton';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import store from '../../../../../store/store';

const Teacher = observer(({ main }) => {
  const {
    WebStore: { web },
    TeacherStore: { getUserTeacher, userTeacher, fetchTeacherUser },
    auth: { openNotification },
  } = store;
  const sliderRef = useRef();
  const theme = useTheme();
  var sizeStatus = useMediaQuery(theme.breakpoints.down('xl'));

  useEffect(() => {
    if (fetchTeacherUser === false && web) {
      getUserTeacher({ userId: web?.userId })
        .then(() => {})
        .catch((err) => {
          openNotification({ message: err?.message, type: 'error' });
        });
    }
  }, [web]);

  return (
    <>
      {!main && <ContentBannner title="Teachers" />}
      <TitleContainer
        title="About the Teachers"
        subTitle="We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs"
      />
      <Container
        mt={5}
        style={{
          background: `url(${backgroundCoverImage2})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {main ? (
          <>
            <Carousel ref={sliderRef} slidesToShow={sizeStatus ? 1 : 4}>
              {userTeacher.map((item, index) => {
                item['link'] = `/teachers/profile-details/${item.id}`;
                return <MaskImageContainer item={item} key={index} />;
              })}
            </Carousel>
            <ArrowButton sliderRef={sliderRef} />
          </>
        ) : (
          <>
            <Grid container sx={{ justifyContent: 'center' }}>
              {userTeacher.map((item, index) => {
                item['link'] = `/teachers/profile-details/${item.id}`;
                return (
                  <Grid item xs={12} sm={6} md={4} xl={3} xxl={4} key={index}>
                    <MaskImageContainer item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
});

Teacher.propTypes = {
  main: PropTypes.number,
};
export default Teacher;
