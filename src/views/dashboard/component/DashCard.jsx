import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';
import store from '../../../store/store';
import LineSkeleton from '../../../component/LineSkeleton/LineSkeleton';
import { dashboard } from '../../../config/routes/dashboard/indexRoutes';
import styled from 'styled-components';
import CustomPaper from '../../../component/Paper/Paper';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DashCard = observer(() => {
  const {
    DashStore: { webCount },
  } = store;
  const [list, setList] = useState([]);

  useEffect(() => {
    if (webCount) {
      setList([
        {
          title: 'Users',
          subtitle: 'Total',
          key: 1,
          link: dashboard.Users,
          total: webCount.Users,
          color: '#007bff',
        },
        {
          title: 'Testimonials',
          subtitle: 'Stu',
          key: 2,
          link: dashboard.Testimonial,
          total: webCount.Testimonials,
          color: '#e83e8c',
        },
        {
          title: 'Blogs',
          subtitle: 'subtitle',
          key: 3,
          link: dashboard.Blog,
          total: webCount.Blogs,
          color: '#28a745',
        },
        {
          title: 'Gallery',
          subtitle: 'subtitle',
          key: 4,
          total: 0,
          color: '#ff9800',
        },
      ]);
    }
  }, [webCount]);

  return webCount ? (
    <Grid container spacing={4}>
    {list.map((item) => {
      // const chart = chartData.find((data) => data.title === item.title);
      return (
        <Grid item xs={12} md={3} key={item.key}>
          <StyledCard elevation={2}>
            <CardLeft>
              <img src={item.img} alt="" />
              <br />
              <Linked to={item.link} style={{color:item.color}}>
                <TrendingUpIcon />
                <span> View {item.title}</span>
              </Linked>
            </CardLeft>
            <CardRight>
              <Title>{item.title}</Title>
              <Subtitle>Total - {item.total}</Subtitle>
              {/* <Chart
                series={chart.series}
                options={chart.options}
                type="donut"
                height={100}
                width={100}
              /> */}
            </CardRight>
          </StyledCard>
        </Grid>
      );
    })}
  </Grid>
  ) : (
    <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'end' }}>
      {[...Array(4)].map((_, i) => {
        return (
          <Grid item xs={12} md={6} xl={3} sm={12} key={i}>
            <LineSkeleton style={{ width: '100%', height: '150px' }} />
          </Grid>
        );
      })}
    </Grid>
  );
});

export default DashCard;

const StyledCard = styled(CustomPaper)`
  && {
    width: 100%;
    padding: 18px 18px 8px 18px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px !important;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: translateY(-0.5px);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
    }
  }
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #777777;
  margin-bottom: 8px;
`;

const Linked = styled(Link)`
  && {
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    span {
      font-size: 0.9rem;
      margin-left: 5px;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;
