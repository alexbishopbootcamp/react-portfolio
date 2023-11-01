import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="flex items-center bg-slate-600 text-white p-4 h-24">
      <span className="w-72 text-4xl">Header Title</span>
      <Navigation />
    </div>
  );
};

export default Header;
