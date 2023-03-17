<template>
    <Bubble
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
//   import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, PointElement, LinearScale } from 'chart.js'
  import { Bubble } from 'vue-chartjs'
  ChartJS.register(Title, LinearScale, PointElement, Tooltip)
  
  export default {
    name: 'BubbleChart',
    components: { Bubble },
    data() {
      return {
        chartData: {
          datasets: [ 
            { 
                label: 'third party',
                backgroundColor: '#000000',
                borderColor: '#ffffff',
                hoverBackgroundColor: '#ffffff',
                data: [
                    {
                    x: 4.67,
                    y: 0,
                    label: 'personal data is given to third parties'
                    },
                    {
                    x: 3.67,
                    y: 1,
                    label: 'third-party cookies are used for advertising'
                    }
                ]
            },
            { 
                label: 'ownership',
                backgroundColor: '#000000',
                borderColor: 'red',
                hoverBackgroundColor: 'red',
                data: [
                    {
                    x: 4.67,
                    y: 2.5,
                    label: 'The service can delete your account without prior notice and without a reason'
                    },
                    {
                    x: 4.33,
                    y: 1,
                    label: 'The service can license user content to third parties'
                    },
                    {
                    x: 4.67,
                    y: 2,
                    label: 'You sign away moral rights'
                    }
                ]
            },
            { 
                label: 'data types',
                backgroundColor: '#000000',
                borderColor: 'green',
                hoverBackgroundColor: 'green',
                data: [
                    {
                    x: 4.86,
                    y: 0,
                    label: 'Many different types of personal data are collected'
                    },
                    {
                    x: 4.86,
                    y: 1,
                    label: 'The service can read your private messages'
                    },
                    {
                    x: 3.86,
                    y: 2,
                    label: 'This service can view your browser history'
                    },
                    {
                    x: 4.71,
                    y: 0.5,
                    label: 'This service may collect, use, and share location data'
                    },
                    {
                    x: 5,
                    y: 1.5,
                    label: 'Your biometric data is collected'
                    },
                ]
            },
            { 
                label: 'hidden collection',
                backgroundColor: '#000000',
                borderColor: 'purple',
                hoverBackgroundColor: 'purple',
                data: [
                    {
                    x: 4.5,
                    y: 0,
                    label: 'This service holds onto content that you have deleted'
                    },
                    {
                    x: 4.5,
                    y: 1,
                    label: 'The service stores your data whether you have an account or not'
                    },
                    {
                    x: 3.67,
                    y: 2,
                    label: 'This service keeps user logs for an undefined period of time'
                    }
                ]
            }

         ],
        },
        chartOptions: {
          backgroundColor: 'white',
          radius: 30,
          PointElement:{
            showLabel: true,
          }
        }
      }
    }
  }
  </script>
  