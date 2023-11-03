import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="fixed z-10 bottom-0 w-full flex items-center bg-slate-600 text-white sm:p-4 p-1 h-24
      sm:top-0 sm:bottom-auto">
      <span className="w-72 text-4xl hidden sm:block">Alex Bishop</span>
      <Navigation />
    </div>
  );
};

export default Header;
