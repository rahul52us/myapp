import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../../../../component/Typography/Typography';
import InnerBackImage from '../../../../assests/sun-shadow-right.png';
import { Grid } from '@mui/material';

const TrendingWebEle = ({ Image, gradiant, preTitle, title, tags }) => {
  return (
    <TopFeaturesContainer gradiant={gradiant}>
      <TopFeaturesInner>
        <TopFeaturesContent>
          <PreTitle variant="p">{preTitle}</PreTitle>
          <Title variant="h6">{title}</Title>
        </TopFeaturesContent>
        <Thumbnail>
          <img src={Image} alt="" />
        </Thumbnail>
      </TopFeaturesInner>
      <InnerRightImage>
        <img src={InnerBackImage} alt="" />
      </InnerRightImage>
      <TagsContainer
        container
        sx={{ display: 'flex', justifyContent: 'center' }}
        columnSpacing={2}
        rowSpacing={2}
      >
        {tags.map((item, index) => {
          return (
            <Grid item key={index} className="tagTitleContainer">
              <TagTitle>{item.name}</TagTitle>
            </Grid>
          );
        })}
      </TagsContainer>
    </TopFeaturesContainer>
  );
};

TrendingWebEle.propTypes = {
  Image: PropTypes.string.isRequired,
  gradiant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preTitle: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default TrendingWebEle;

const TopFeaturesContainer = styled.div`
  background: ${(props) => props.gradiant};
  border-radius: 5px;
  padding: 2rem;
  text-align: center;
  position: relative;
`;
const TopFeaturesInner = styled.div`
  text-align: center;
`;
const TopFeaturesContent = styled.div`
  height: 120px;
`;
const PreTitle = styled(Typography)`
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: #ffffff;
  text-transform: uppercase;
  height: 200px;
`;
const Title = styled(Typography)`
  && {
    font-size: 1.6rem;
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    margin-top: 0.8rem;
    line-height: 1 !important;
  }
`;
const Thumbnail = styled.div`
  height: 250px;
`;
const InnerRightImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
const TagsContainer = styled(Grid)`
margin-top: 1.2rem !important;
`;
const TagTitle = styled.span`
  background-color: rgba(255, 255, 255, 0.05);
  min-width: max-content;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.2rem 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #ffffff;
  letter-spacing: 1px;
`;
