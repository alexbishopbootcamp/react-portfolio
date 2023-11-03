import React from 'react';
import { useState } from 'react';

const Project = ({ title, image, description, deployment, github }) => {
  const [isFocused, setIsFocused] = useState(false); // For keyboard navigation
  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`group relative transition-transform
                 bg-slate-200 bg-cover bg-center overflow-hidden
                 sm:rounded-2xl
                 w-full h-56 mb-1  
                 sm:w-72 sm:h-52 sm:m-4 
                 sm:hover:scale-110
                 ${isFocused ? 'sm:scale-110' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    > 
      <div className={`absolute inset-0 bg-black opacity-70 sm:opacity-50
                      sm:group-hover:opacity-70 transition-all duration-200
                      ${isFocused ? 'sm:opacity-70' : ''}`}
      ></div>
      <h2 className={`absolute top-9 sm:top-1/2 inset-x-0
                    flex items-center justify-center 
                    text-white text-2xl font-bold
                    transition-all duration-200 
                    sm:group-hover:top-9
                    -translate-y-1/2
                    ${isFocused ? 'sm:top-9' : ''}`}
      >
        {title}
      </h2>
      <p className={`absolute top-1/3 inset-x-0
                    px-4 text-center
                    flex items-center justify-evenly
                    text-white text-md
                    transition-all duration-200 
                    sm:text-opacity-0 sm:group-hover:text-opacity-100
                    ${isFocused ? 'sm:text-opacity-100' : ''}`}
      >
        {description}
      </p>
      <div className={`absolute bottom-3 inset-x-3
                      flex items-center justify-around
                      sm:opacity-0 sm:group-hover:opacity-100
                      transition-all duration-200
                      ${isFocused ? 'sm:opacity-100' : ''}`}
      >
        <a
          href={deployment}
          target="_blank"
          rel="noreferrer"
          className={`bg-slate-600 text-white text-lg font-bold py-2 px-4 rounded-lg
                     hover:bg-slate-700 transition-all duration-200
                     focus:bg-slate-700`}
        >
          Open
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={`bg-slate-600 text-white text-lg font-bold py-2 px-4 rounded-lg
                     hover:bg-slate-700 transition-all duration-200
                     focus:bg-slate-700`}
        >
          Code
        </a>
      </div>
    </div>
  );
};




export default Project;
