import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="fixed z-10 bottom-0 w-full flex items-center bg-slate-600 text-white p-4 h-24
      sm:top-0 sm:bottom-auto">
      <span className="w-72 text-4xl">Header Title</span>
      <Navigation />
    </div>
  );
};

export default Header;
