import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import store from '../../../store/store';

const ColumnChart = observer(() => {
  const {layout : {themeMode}} = store
  const [state] = useState({
    options: {
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 5000,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      colors: ['#008FFB', '#008FFB', '#008FFB', '#008FFB', '#008FFB', '#008FFB'],
      redrawOnWindowResize: true,
      theme: {
        mode: themeMode,
        palette: 'palette10',
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      chart: {
        id: 'basic-bar',
        height: 550,
        // background:'red'
      },
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
        autoSelected: 'zoom',
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      xaxis: {
        lines: {
          show: false,
        },
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        title: {
          text: 'Years',
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
        labels: {
          formatter: function (val) {
            return `s - ${val}`;
          },
        },
        title: {
          text: 'Temperature',
        },
        min: 20,
        max: 100,
      },
      fill: {
        type: 'gradient',
        colors: [
          '#F44336',
          '#E91E63',
          '#9C27B0',
          '#F44336',
          '#E91E63',
          '#9C27B0',
          '#F44336',
          '#E91E63',
        ],
        // gradient: {
        //   shadeIntensity: 1,
        //   inverseColors: false,
        //   opacityFrom: 0.5,
        //   opacityTo: 0.8,
        //   stops: [0, 90, 100],
        // },
      },
      dataLabels: {
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0'],
        },
      },
      markers: {
        colors: ['#F44336', '#E91E63', '#9C27B0'],
        size: 25,
      },
      grid: {
        borderColor: '#111',
        strokeDashArray: 7,
        row: {
          colors: ['#e5e5e5', 'transparent'],
          opacity: 0.5,
        },
        column: {
          colors: ['#f8f8f8', 'transparent'],
          opacity: 0.5,
        },
      },
      title: {
        text: 'Average High & Low Temperature',
        align: 'left',
        floating: true,
        style: {
          color: 'black',
          fontSize: 16,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      legend: {
        position: 'center',
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
        // horizontalAlign: 'right',
        // floating: true,
        // // offsetY: -25,
        // // offsetX: -5,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            legend: {
              position: 'bottom',
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val;
              },
              offsetY: -0,
              offsetX: 0,
              style: {
                fontSize: '12px',
                colors: ['#304758'],
              },
            },
          },
        },
        {
          breakpoint: 2500,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: 'bottom',
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val;
              },
              offsetY: 0,
              offsetX: 0,
              style: {
                fontSize: '12px',
                colors: ['#304758'],
              },
            },
          },
        },
      ],
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <Chart options={state.options} series={state.series} type="bar" width="100%" height="500px" />
  );
});

export default ColumnChart;
