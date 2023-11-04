import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    id: 1,
    text: 'About',
    url: '/about',
  },
  {
    id: 2,
    text: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    text: 'Contact',
    url: '/contact',
  },
  {
    id: 4,
    text: 'Resume',
    url: '/resume',
  },
]

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sm:mt-4 flex h-full w-full sm:space-x-10 justify-evenly sm:justify-center">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.url}
          className={`flex-1 sm:flex-none sm:w-28 text-center px-2 py-6 text-md transition-colors duration-200
                sm:py-2 sm:px-4 sm:text-lg
                ${location.pathname === link.url ? 'bg-gray-100 text-black' : 'hover:bg-gray-100 hover:text-black'}`}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
