import React from 'react';
import {Bar} from 'react-chartjs-2';


const barChart = (barChart) => {


    return(
    <>
    <div style ={{width : "70%"}}>
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
                  text:'제품별 주문건수',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
            </div>
          </>
    )
    }
    export default barChart