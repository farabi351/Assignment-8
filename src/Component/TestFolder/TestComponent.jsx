import React from 'react';
import download from '../../assets/icon-downloads.png';
 import star from '../../assets/icon-ratings.png'

const TestComponent = ({ c, uninstall }) => {
    return (

        <div className='flex justify-between items-center border-red-500 border- mb-5 md:mx-25 bg-white w-full mx-2'>

        <div className='flex'>

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

            {/* onClick={() => uninstall(c)} */}

            <button onClick={() => uninstall(c)}  className="btn bg-green-500 text-white">Uninstall</button>

        </div>


        
        
     </div>
        
    );
};

export default TestComponent;



// {/* <div>
//              {/* UI stuff */}

//       <button
//         onClick={() => onUninstall(c.id)}
//         className="btn bg-green-500 text-white"
//       >
//         Uninstall
//       </button>
//         </div> */}