import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';
import FilterApps from '../FilterApps/FilterApps';
 import { useState } from 'react';
 import { useNavigate } from "react-router";
import { useEffect } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)



 

const Apps = () => {

  const [input, setInput] = useState("");

    const myAppData=useLoaderData();
   // console.log(myAppData);
    console.log(myAppData.length);
    //const thisApp = myAppData.find(app => app.id === Number(input));

    //const findMyApp=myAppData.filter(f=>f===input)

    const navigate = useNavigate();

    
     const findMyApp = myAppData.filter(app =>
          
          app.title.toLowerCase().includes(input.toLowerCase())
     
          
     
 );

useEffect(() => {
  if (input && findMyApp.length === 0) {
    navigate("/not-found");
  }
}, [input, findMyApp, navigate]);




Swal.fire({
  position: "top-middle",
  icon: "success",
  title: "Loading for you",
  showConfirmButton: false,
  timer: 700
});




 console.log(findMyApp);



   

    return (

        
      <div className='bg-blue-50 py-10'>


         <h1 className='text-center font-bold md:text-6xl mt-10 mb-5'>Our All Applications</h1>
         <p className='text-center mb-4 text-sm'>Explore All Apps on the Market developed by us. We code for Millions</p>


         <div className='flex justify-between items-center md:mx-40 mb-20 mt-20'>

            <button className='font-bold'>({myAppData.length})Apps Found</button>

            <input value={input} type="search" placeholder="Type here" className="input w-auto"  onChange={(e) => setInput(e.target.value)}/>

{/*             
             {
                  myAppData.map(c=><FilterApps c={c}></FilterApps>)
             } */}




           
           
            {/* <input type="search" name="" id="" /> */}
            {/*  */}

         </div>







            <div className='md:grid grid-cols-4 mx-15'>

            
           
            


              {
                    findMyApp.map(d=><SingleApp key={d.id} d={d}></SingleApp>)
              }

            {/* <button className='text-center mt-10 bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white btn'>Show All</button> */}
            
        </div>
      </div>

       
    );
};

export default Apps; 



  