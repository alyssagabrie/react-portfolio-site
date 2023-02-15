import React from 'react';

// images 
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className=' py-8'>
  
  <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
      {/* logo */}
      <a href='#'>
        
        {/* <img src={Logo} alt='' /> */}
      </a>
      <a href='AlyssaHerreraResume.pdf'
      download='AlyssaHerreraResume.pdf'>
      <button className= 'btn btn-sm'> My Resume</button></a>
    </div>

    
   </div>
   </header>
  );
};

export default Header;
