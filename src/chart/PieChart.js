import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const PieChart = (pieChart) => {

return(
<>
<Doughnut
          data={pieChart.pieChart}
          options={{
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
)}

export default PieChart