import React from 'react';
import {Line} from 'react-chartjs-2';

const Graph = (graph) => {

return(
<>
<Line
          data={graph.graph}
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

export default Graph