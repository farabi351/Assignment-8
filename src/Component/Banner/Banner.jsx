import React, { useState } from 'react';
import playStore from '../../assets/playStore.png'
import appStore    from '../../assets/appStore.png'
import hero from '../../assets/hero.png'
import { Link } from "react-router";


import { useLoaderData } from 'react-router';
import TrendingApps from '../TrendingApps/TrendingApps';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)






const Banner = () => {
    //const [myApp,setMyApp]=useState([]);
    const appData=useLoaderData();
    //console.log(appData);
    //console.log(myApp);
    //appData.map(c=>console.log(c))

    Swal.fire({
  position: "top-middle",
  icon: "success",
  title: "Loading for you",
  showConfirmButton: false,
  timer: 700
});



   
    return (
        <div className='justify-center items-center text-center  bg-[#E9E9E9]'>
            <h1 className='font-bold text-xl md:text-6xl p-10'>We Build <br /><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
            <p className='mt-5 text-gray-500 text-sm'>At HERO.IO ,we craft innovative designed to make everyday life simpler ,smarter and more exciting <br />our goal is to turn your ideas into digital experiences that truly make in impact.</p>
            <div className='flex justify-center items-center gap-4 mt-5'>

                <div className="flex">
                    <a
                       href="https://play.google.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn flex items-center gap-2"
                    >
                   
                    <img
                     src={playStore}
                     alt="Google Play"
                     className="h-[24px] w-[24px]"
                    />
                          Google Play
                    </a>

                </div>

                {/* <button className='btn'>App Store</button> */}

                {/* <div className="flex">
                    <button className="btn flex items-center gap-2">
                           <img
                              src={appStore}
                               alt="Google Play"
                              className="h-[24px] w-[24px]"
                           />
                             App Store
                    </button>
                </div> */}


                <div className="flex">
                    <a
                       href="https://www.apple.com/app-store/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn flex items-center gap-2"
                    >
                   
                    <img
                     src={appStore}
                     alt="Google Play"
                     className="h-[24px] w-[24px]"
                    />
                          App Store
                    </a>

                </div>

            </div>
            <div className='mt-10 flex justify-center'>
                 <img className='w-[300px] md:w-auto' src={hero} alt="" />
            </div>

            <div className='bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]'>
                <div  className='p-10'>
                <h1 className='text-center text-white text-3xl mb-5 font-bold'>Trusted By Millions,Built For You</h1>
                <div className='flex flex-col md:flex-row justify-evenly items-center text-white mb-2 gap-5'>

                    <div className='text-white'>
                        <p>Total Downloads</p>
                        <h1 className='text-5xl font-bold'>29.6M</h1>
                        <p className='font-light'>21% More Then Last Month</p>
                    </div>

                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-5xl font-bold'>906K</h1>
                        <p className='font-light'>46% More Then Last Month</p>
                    </div>

                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-5xl font-bold'>132+</h1>
                        <p className='font-light'>31 More Will Launch</p>
                    </div>

                </div>
            </div>
            </div>

            
            <h1 className='text-center mt-7 mb-3 font-bold text-black text-5xl'>Trending Apps</h1>
            <p className='text-center text-gray-600 font-semibold mb-10'>Explore All Trending Apps on the Market Developed by us</p>



           <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center mt-10 gap-5 p-2 md:mx-20'>
                   {

                        appData.slice(0, 8).map(c=><TrendingApps key={c.id} c={c}></TrendingApps>)
            
                   }

           </div>

           

            <Link to="/apps">
                     <button className="text-center mt-10 bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white btn mb-10">
                        Show All
                     </button>
            </Link>


            

            

            

        </div>
    );
};

export default Banner;