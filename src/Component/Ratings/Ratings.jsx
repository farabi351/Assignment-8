import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis,CartesianGrid,Tooltip } from 'recharts';

const Ratings = ({myData}) => {

   // console.log(myData);

    

   

    return (
        // <div className=''>
        //     <BarChart width={500} height={500} data={myData}>
        //         {/* <Yaxis dataKey={'count'}></Yaxis> */}
        //         <YAxis dataKey={'count'}></YAxis>
                
        //         <XAxis></XAxis>
                
        //         <Bar dataKey={'count'}></Bar>
                
        //     </BarChart>
        // </div>

        <div>
             
  <BarChart
    width={1000}
    height={400}
    data={myData}     
    layout="vertical"        
    // margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
  >
    {/* <CartesianGrid strokeDasharray="3 3" /> */}
    <XAxis type="number" />
      <YAxis
        dataKey="name"
        type="category"
        reversed        //  THIS flips order visually
      />
    
    {/* <Tooltip /> */}
    <Bar dataKey="count" fill="#FF8811" />
  </BarChart>
</div>



    );
};

export default Ratings;




  {/* <LineChart width={500} height={500} data={myData}>
                <Line dataKey={'count'}></Line>
            </LineChart> */}