import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const PieChart = (pieChart) => {

return(
<>
<div style ={{width : "70%"}}>
<Doughnut
          data={pieChart.pieChart}
          options={{
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
)}

export default PieChart