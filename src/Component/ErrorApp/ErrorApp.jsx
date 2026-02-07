import React from 'react';
import errorApp from '../../assets/App-Error.png'
import { Link } from 'react-router';

const ErrorApp = () => {
    return (
        <div className='h-[800px] flex flex-col justify-center items-center bg-gray-100 md:h-[600px]'>
            <img className='mt-15' src={errorApp} alt="" />
            <h1 className='text-3xl md:text-5xl font-bold mt-5 mb-2'>OOPS APP NOT FOUND!</h1>
            <p className='text-2xl'>The App you are requesting is not found on our system.  please try another apps</p>

            <Link to='/'><button className='bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white rounded-md w-[100px] h-[40px] mb-2 btn'>Go Back!</button></Link>
            
        </div>

        
    );
};

export default ErrorApp;