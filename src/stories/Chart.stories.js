import * as React from 'react';
import BarChart from "../chart/BarChart"
import PieChart from "../chart/PieChart"
import GraphChart from "../chart/Graph"

const barChart_data = {
    labels: ['제품1', '제품2', '제품3',
               '제품4', '제품5' ],
      datasets:[
         {
          label: '2018',
          backgroundColor: '#D7DF01',
          borderColor: '#D7DF01',
          borderWidth: 1,
          data: [100, 100, 80, 81, 100 ],
        },
        {
          label: '2019',
          backgroundColor: '#FA5882',
          borderColor: '#FA5882',
          borderWidth: 2,
          data: [50, 80, 60, 20, 56 ],
        },
        {
            label: '2020',
            backgroundColor: '#29088A',
            borderColor: '#29088A',
            borderWidth: 2,
            data: [40, 80, 50, 10, 80],
          }
    ]}



    const graphChart_data = {
        labels: ['2016', '2017', '2018',
        '2019', '2020'],
    datasets: [
    {
    label: '제품1',
    fill: false,
    lineTension: 0.5,
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderWidth: 2,
    data: [22, 40, 70, 44, 0]
    },
    {
        label: '제품2',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#FE2E2E',
        borderColor: '#FE2E2E',
        borderWidth: 2,
        data: [65, 59, 80, 20, 100]
        },
        {
            label: '제품3',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#29088A',
            borderColor: '#29088A',
            borderWidth: 2,
            data: [10, 80, 50, 10, 50]
            }
    ]}



    const pieChart_data = {

        labels: ['제품1', '제품2', '제품3',
        '제품4'],
    datasets: [
    {
    label: 'Rainfall',
    backgroundColor: [
     '#B21F00',
     '#C9DE00',
     '#2FDE00',
     '#00A6B4',
    ],
    hoverBackgroundColor: [
    '#501800',
    '#4B5000',
    '#175000',
    '#003350',
    ],
    data: [65, 59, 30, 99]},
    ]}


    export default {
        title : "Chart"
    }



    
export const barChart = () => <BarChart barChart = {barChart_data}/>

export const graphChart = () => <GraphChart graph = {graphChart_data}/>

export const pieChart = () => <PieChart pieChart = {pieChart_data}/>