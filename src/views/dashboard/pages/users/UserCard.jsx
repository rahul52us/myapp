import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import LineSkeleton from '../../../../component/LineSkeleton/LineSkeleton';
import store from '../../../../store/store';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import StudentImage from '../../assets/students.png';
import TeacherImage from '../../assets/femaleTeacher.png';
import CustomPaper from '../../../../component/Paper/Paper';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const UserCard = observer(() => {
  const {
    DashStore: { userCounts },
  } = store;
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (userCounts) {
      const { students, teachers, staffs } = userCounts;
      const total = students + teachers + staffs;

      const studentPercent = Math.round((students / total) * 100);
      const teacherPercent = Math.round((teachers / total) * 100);
      const staffPercent = Math.round((staffs / total) * 100);

      const chartData = [
        {
          title: 'Students',
          series: [studentPercent, 100 - studentPercent],
          options: {
            chart: {
              type: 'pie',
              height: 200,
            },
            labels: [`Students: ${students}`, ''],
            colors: ['#007bff', '#ebedf0'],
            plotOptions: {
              pie: {
                expandOnClick: true,
              },
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
        {
          title: 'Teachers',
          series: [teacherPercent, 100 - teacherPercent],
          options: {
            chart: {
              type: 'donut',
              height: 200,
            },
            labels: [`Teachers: ${teachers}`, ''],
            colors: ['#e83e8c', '#ebedf0'],
            plotOptions: {
              pie: {
                expandOnClick: true,
              },
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
        {
          title: 'Staff',
          series: [staffPercent, 100 - staffPercent],
          options: {
            chart: {
              type: 'donut',
              height: 100,
            },
            labels: [`Staff: ${staffs}`, ''],
            colors: ['#28a745', '#ebedf0'],
            plotOptions: {
              pie: {
                expandOnClick: true,
              },
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      ];
      setChartData(chartData);
    }
  }, [userCounts]);

  const list = [
    {
      title: 'Students',
      subtitle: 'Total',
      key: 1,
      link: '/dashboard/students',
      total: userCounts?.students,
      color: '#007bff',
      img: StudentImage,
    },
    {
      title: 'Teachers',
      subtitle: 'Total',
      key: 2,
      link: '/dashboard/teachers',
      total: userCounts?.teachers,
      color: '#e83e8c',
      img: TeacherImage,
    },
    {
      title: 'Staff',
      subtitle: 'Total',
      key: 3,
      link: '/dashboard/staffs',
      total: userCounts?.staffs,
      color: '#28a745',
      img: TeacherImage,
    },
    {
      title: 'Staff',
      subtitle: 'Total',
      key: 4,
      link: '/dashboard/staffs',
      total: userCounts?.staffs,
      color: '#28a745',
      img: TeacherImage,
    },
  ];

  return chartData ? (
    <Grid container spacing={4}>
      {list.map((item) => {
        const chart = chartData.find((data) => data.title === item.title);
        return (
          <Grid item xs={12} md={3} key={item.key}>
            <StyledCard elevation={2}>
              <CardLeft>
                <img src={item.img} alt="" />
                <br />
                <Linked to={item.link} style={{ color: item.color }}>
                  <TrendingUpIcon />
                  <span> View {item.title}</span>
                </Linked>
              </CardLeft>
              <CardRight>
                <Title>{item.title}</Title>
                <Subtitle>Total - {item.total}</Subtitle>
                <Chart
                  series={chart.series}
                  options={chart.options}
                  type="donut"
                  height={100}
                  width={100}
                />
              </CardRight>
            </StyledCard>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <Grid container spacing={4} justifyContent="flex-end">
      {[...Array(4)].map((_, i) => {
        return (
          <Grid item xs={12} md={3} key={i}>
            <LineSkeleton style={{ width: '100%', height: '150px' }} />
          </Grid>
        );
      })}
    </Grid>
  );
});

const StyledCard = styled(CustomPaper)`
  && {
    width: 100%;
    padding: 15px 16px 8px 16px;
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

export default UserCard;
