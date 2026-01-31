import React from 'react';
import { Link } from 'react-router';
import AppDetails from '../AppDetails/AppDetails';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'

const SingleApp = ({d}) => {

    //console.log(d);

    return (

        
        <div className='justify-items-center'>

         
        <Link to={`/appDetails/${d.id}`}>
            <div className='w-[300px] h-[410px] mb-10 border- border-red-300 p-10 bg-white mx-auto mr-10'>
                        <img className='mb-10 h-[200px] mx-auto' src={d.image}  alt="" />
                        <h1 className='text-md font-bold'>{d.title}: {d.description}</h1>
                        <div className='flex justify-between border- border-red-500 mt-5'>
        
                            <div className='flex btn'>
                                <img src={download} className='h-[15px] w-[15px]' alt="" />
                                <button className=' font-semibold text-[#00D390]'>{d.downloads} M</button>
                            </div>
                            
                            <div className='flex btn'>
                                <img className='w-[15px] h-[15px]' src={star} alt="" />
                                <button className='text-[#FF8811]'>{d.ratingAvg}</button>
                            </div>
        
                        </div>

            
            
            </div></Link>

            
        
        </div>
    );
};

export default SingleApp