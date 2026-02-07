import React, { useState } from 'react';
 import download from '../../assets/icon-downloads.png';
 import star from '../../assets/icon-ratings.png'
 import { deleteToStoredDB, getStoredApp } from '../../Utility/addToDb';
import TestComponent from '../TestFolder/TestComponent';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';











const InstalledCard = ({c,selectedId,setSelectedId,appList,setAppList}) => {

 const [myUninstall,setMyUninstall]=useState(getStoredApp());

 const [mySize,setMySize]= useState([]);


const uninstall=c=>{
    ////this will delete uninstall div from local Storage
     toast.success('You have uninstalled the app');
   deleteToStoredDB(c);
  console.log('you clicked uninstall')




   //this will delete uninstall div in local storage and UI
   setAppList(prev => prev.filter(app => app.id !== c.id));


   
}

console.log(c.downloads); 

// const sortMe= [...c.downloads].sort((a,b)=>b.downloads-a.downloads);
// console.log(sortMe);





    return (

     <div className='flex justify-between items-center border-red-500 border- mb-5 md:mx-25 bg-white w-full mx-2'>

        <div className='flex'>

            <ToastContainer></ToastContainer>

            <div>
                <img className='h-[60px] mx-auto p-2' src={c.image}  alt="" />
            </div>

            <div className=''>
                 <h1>{c.title}: {c.description}</h1> 
                 <div className='flex gap-2'>
                      <div className='flex items-center justify-center'>
                           <img src={download} className='h-[13px] w-[15px]' alt="" />
                           <button className=' font-semibold text-[#00D390]'>{c.downloads} M</button>
                      </div>
                      <div className='flex items-center justify-center'>
                           <img src={star} className='h-[15px] w-[15px]' alt="" />
                           <button className=' font-semibold text-[#00D390]'>{c.ratingAvg}</button>
                      </div>
                      <div className='flex items-center justify-center'>
                           {/* <img src={download} className='h-[15px] w-[15px]' alt="" /> */}
                           <button className=' font-semibold text-gray-800'>{c.size} MB</button>
                      </div>
                       
                  </div>               
            </div>


        </div>

        <div>

       

            <button onClick={() => uninstall(c)}  className="btn bg-green-500 text-white">Uninstall</button>

        </div>


         {/* {myUninstall.map(app => (
        <TestComponent
          key={app.id}
          c={app}
          onUninstall={uninstall}
        />
      ))} */}
        
     </div>

    );
};

export default InstalledCard;




