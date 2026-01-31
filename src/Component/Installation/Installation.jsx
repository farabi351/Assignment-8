import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Installation = () => {
    return (
        <div className='h-[500px] bg-[#E9E9E9]'>
            <h1 className='text-md md:text-7xl text-center mb-5 p-10 font-semibold'>Your Installed Apps</h1>
            <p className='text-center text-gray-500 font-semibold'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex flex-col md:flex-row justify-between items-center md:mx-25'>

                <h1>1 App found</h1>
                <div className="dropdown dropdown-start">
                     <div tabIndex={0} role="button" className="btn m-1">Sort by <IoIosArrowDown /> </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Size</a></li>
                                <li><a>Downloads</a></li>
                            </ul>
                </div>

            </div>


            <div className='flex flex-col md:flex-row justify-between items-center md:mx-25 border- border-red-300 bg-white p-5 mt-5'>

                <div>
                    <h1>forest focus for produc</h1>
                    <div className='flex justify-between font-bold'>

                        <button>9m</button>
                        <button>258m</button>

                    </div>
                </div>
                {/* onclick */}
                <button className='btn bg-green-500 text-white'>Uninstall</button>

            </div>
            

        </div>
    );
};

export default Installation;