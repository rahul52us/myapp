import { observer } from 'mobx-react-lite';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import store from '../../../store/store';
import PropTypes from 'prop-types';

const PieChart = observer(({ labels, values, title }) => {
  const {
    layout: { themeMode },
  } = store;

  const [chartData] = React.useState({
    series: values,
    options: {
      theme: {
        mode: themeMode,
        palette: 'palette1',
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      chart: {
        width: '100%',
        type: 'pie',
      },
      stroke: {
        width: 0,
      },
      title: {
        align: 'center',
        floating: true,
        style: {
          color: 'black',
          fontSize: 16,
        },
      },
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 2500,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      {title && <h2 style={{ textAlign: 'center' }}>{title}</h2>}
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width={'80%'}
        height="500px"
      />
    </div>
  );
});

PieChart.propTypes = {
  labels: PropTypes.array,
  values: PropTypes.array,
  title: PropTypes.string,
};

export default PieChart;
