import React from 'react';
import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
    const links=<>
          <Link to='/'><li className='btn btn-ghost'>Home</li></Link>
          {/* <li className='btn'>Home</li> */}
          <Link to='/apps'><li className='btn btn-ghost'>Apps</li></Link>

          <Link to='/installation'><li className='btn btn-ghost'>Installation</li></Link>
          
          
    
    </>
    return (
        <div className="navbar bg-[#FFFFFF] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {links}
      </ul>
    </div>
   <Link to='./'><div className='flex mx-10 btn bg-transparent border-none'>
        <img className='md:w-[50px] md:h-[50px] w-[35px]' src={logo} alt="" />
        <a className="md:btn btn-ghost md:text-xl text-lg text-transparent bg-clip-text bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] font-bold border-none">HERO.IO</a>
        
    </div></Link>



  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 font-semibold ml-20">
      {/* <li><a className='btn text-black mr-2 bg-transparent border-none'>Home</a></li>
      <li><a className='btn text-black mr-2  bg-transparent border-none'>Apps</a></li>
      <li><a className='btn text-black  bg-transparent border-none'>Installation</a></li> */}
      {links}
    </ul>
  </div>
  <div className="navbar-end mx-10">
      <div className='flex btn md:w-[150px] md:h-[40px] w-[110px] bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white'>
        
            <a
                        href="https://github.com/farabi351?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" flex items-center gap-2"
                     >
            
            <span><FaGithub></FaGithub></span>
            <span>Contribute</span>

            </a>
      </div>
  </div>
</div>
    );
};

export default Navbar;


// <div className="flex">
                //     <a
                //        href="https://www.apple.com/app-store/"
                //        target="_blank"
                //        rel="noopener noreferrer"
                //        className="btn flex items-center gap-2"
                //     >
                   
                //     <img
                //      src={appStore}
                //      alt="Google Play"
                //      className="h-[24px] w-[24px]"
                //     />
                //           App Store
                //     </a>

                // </div>