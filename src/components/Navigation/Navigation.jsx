import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    text: 'About Me',
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
  return (
    <nav className="flex container justify-evenly">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.url}
          className="sm:py-4 sm:px-8 px-2 py-6 text-md sm:text-lg hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
