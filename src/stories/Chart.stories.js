import * as React from 'react';
import BarChart from "../chart/BarChart"
import PieChart from "../chart/PieChart"
import GraphChart from "../chart/Graph"

const barChart = {
    labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets:[
         {
          label: 'chart1',
          backgroundColor: '#D7DF01',
          borderColor: '#D7DF01',
          borderWidth: 1,
          data: [100, 100, 80, 81, 100],
        },
        {
          label: 'chart2',
          backgroundColor: '#FA5882',
          borderColor: '#FA5882',
          borderWidth: 2,
          data: [50, 80, 60, 20, 56],
        }]
    }



    const graphChart = {
        labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
    {
    label: 'chart1',
    fill: false,
    lineTension: 0.5,
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderWidth: 2,
    data: [22, 40, 70, 44, 0]
    },
    {
        label: 'chart2',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#000000',
        borderColor: '#FE2E2E',
        borderWidth: 2,
        data: [65, 59, 80, 20, 100]
        }]}



    const pieChart = {

        labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
    {
    label: 'Rainfall',
    backgroundColor: [
     '#B21F00',
     '#C9DE00',
     '#2FDE00',
     '#00A6B4',
     '#6800B4'
    ],
    hoverBackgroundColor: [
    '#501800',
    '#4B5000',
    '#175000',
    '#003350',
    '#35014F'
    ],data: [65, 59, 80, 81, 56]},
    ]}


    export default {
        title : "Chart",
        component : BarChart,
    }

export const barChart1 = () => <BarChart barChart = {barChart}/>
export const graphChart1 = () => <GraphChart graph = {graphChart}/>
export const pieChart1 = () => <PieChart pieChart = {pieChart}/>