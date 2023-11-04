import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="fixed z-10 bottom-0 w-full flex flex-row text-white bg-color-a h-20
                sm:top-0 sm:bottom-auto">
      
      <div className="w-72 justify-center items-center sm:flex hidden">
        <span className="text-4xl">Alex Bishop</span>
      </div>


      <div className="flex flex-col w-full">
        <Navigation />
      </div>

      <div className="w-72 flex sm:block hidden">
        <span className="text-4xl m-auto"></span>
      </div>
    </div>
  );
};


export default Header;
