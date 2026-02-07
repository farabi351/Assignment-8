import React from 'react';
import demo1 from '../../assets/demo-app (1).webp'
import Apps from '../Apps/Apps';
import { Link } from 'react-router';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png'

const TrendingApps = ({c}) => {

    //console.log(c);

    

    return (
        <Link to={`/appDetails/${c.id}`}><div>

            

            <div className='h-[550px] mb-10 border- border-red-300 p-10 bg-white'>
                <img className='mb-10' src={c.image} alt="" />
                <h1 className='text-2xl font-bold'>{c.title}: {c.description}</h1>
                <div className='flex justify-between border- border-red-500 mt-5'>

                    <div className='flex btn'>
                                                    <img src={download} className='h-[15px] w-[15px]' alt="" />
                                                    <button className=' font-semibold text-[#00D390]'>{c.downloads} M</button>
                                                </div>
                                                
                                                <div className='flex btn'>
                                                    <img className='w-[15px] h-[15px]' src={star} alt="" />
                                                    <button className='text-[#FF8811]'>{c.ratingAvg}</button>
                                                </div>

                </div>
            </div>

            
        </div></Link>
    );
};

export default TrendingApps;