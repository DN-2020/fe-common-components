import React from 'react';
import {Line} from 'react-chartjs-2';

const Graph = (graph) => {

return(
<>
<div style ={{width : "70%"}}>
<Line
          data={graph.graph}
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

export default Graph