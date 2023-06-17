import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const TrendingBlogPreview = () => {
  return (
    <TrendingBlogPreviewContainer>
      <TrendingBlogContainer>
      <TrendingBlogPreviewHeader>
        <TrendingBlogPreviewAvatar />
        <TrendingBlogUserDetails>rahul kushwah in knowledgeforcurious</TrendingBlogUserDetails>
      </TrendingBlogPreviewHeader>
      <TrendingBlogTitle>
        How America’s First Memorial Day Was Lost To Racist Gaps in Our History
      </TrendingBlogTitle>
      </TrendingBlogContainer>
      <TrendingBlogViewImage>
        <img src="https://miro.medium.com/v2/resize:fill:200:134/1*vXL3FFkiYmBAfLVbPRkXng.png" alt="" />
      </TrendingBlogViewImage>
    </TrendingBlogPreviewContainer>
  );
};

export default TrendingBlogPreview;

const TrendingBlogPreviewContainer = styled.div`
display: flex;
justify-content: space-between;

`;
const TrendingBlogPreviewHeader = styled.div`
  display: flex;
  align-items: center;
`;
const TrendingBlogContainer = styled.div`
`
const TrendingBlogPreviewAvatar = styled(Avatar)`
  && {
    width: 20px;
    height: 20px;
  }
`;
const TrendingBlogUserDetails = styled.p`
  font-size: 0.9rem;
  margin-left: 1rem;
  font-weight: bold;
`;
const TrendingBlogTitle = styled.p`
  font-weight: 600;
`;

const TrendingBlogViewImage = styled.div``