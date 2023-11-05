import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="fixed z-10 bottom-0 w-full flex flex-row text-white bg-color-a h-20
                sm:top-0 sm:bottom-auto">
      
      {/* Hide name if there isn't enough room in the header. Name is present on the About me page */}
      <div className="w-72 ml-4 justify-center items-center md:flex hidden">
        <span className="text-3xl">Alex Bishop</span>
      </div>


      <div className="flex flex-col w-full">
        <Navigation />
      </div>

      {/* To keep the header symmetrical */}
      <div className="w-72 mr-4 flex flex-shrink md:flex hidden">
        <span className="text-4xl m-auto"></span>
      </div>
    </div>
  );
};


export default Header;
