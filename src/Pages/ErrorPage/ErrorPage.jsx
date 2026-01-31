import React from 'react';
import errorImg from '../../assets/error-404.png'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        
        <div className=''>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center bg-gray-100'>
            
            <img className='' src={errorImg} alt="" />

              <div className='text-center'>
                 <h1 className='text-4xl font-semibold mb-5 mt-1'>Oops, Page not found!</h1>
                 <p className='text-sm font-semibold text-gray-400 text-center'>The page you are looking is not available</p>
                 <Link to='/'><button className='bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white mt-5 rounded-md w-[100px] h-[50px] mb-2 btn'>Go Back!</button></Link>
              </div>

        </div>
            <Footer></Footer>
        </div>
        
        
    );
};

export default ErrorPage;