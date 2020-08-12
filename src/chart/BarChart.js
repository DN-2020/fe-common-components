import React from 'react';
import {Bar} from 'react-chartjs-2';


const barChart = (barChart) => {


    return(
    <>
             <Bar
              data={barChart.barChart} 
              options={{
                scales: {
                  yAxes : [{
                      ticks : {
                          max : 100,    
                          min : 0,
                          stepSize : 10
                          // reverse:true
                      }
                  }]
              },
    
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </>
    )
    }
    export default barChart