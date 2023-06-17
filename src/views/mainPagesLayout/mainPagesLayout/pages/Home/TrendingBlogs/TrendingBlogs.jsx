import React from 'react';
import BlogPreview from '../../common/component/TrendingBlogPreview';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import Container from '../../../../../../component/common/Container/Container';

const TrendingBlogs = () => {
  return (
    <TrendingBlogContainer>
      <Grid container>
        <Grid item xxl={8} xl={8}>
        <BlogPreview />
        </Grid>
        <Grid item xxl={4} xl={4}>
            <p>rahul</p>
        </Grid>
      </Grid>
    </TrendingBlogContainer>
  );
};

export default TrendingBlogs;

const TrendingBlogContainer = styled(Container)``;
