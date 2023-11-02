import React from 'react';

const Project = ({ title, image, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group 
                 w-11/12 h-56 rounded-2xl relative 
                 bg-slate-200 bg-cover bg-center overflow-hidden 
                 sm:w-72 sm:h-52 sm:m-4
                 transition-transform sm:hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 sm:opacity-50
                      sm:group-hover:opacity-70 transition-all duration-200"
      ></div>
      <h2 className="absolute top-9 sm:top-1/2 inset-x-0
                    flex items-center justify-center 
                    text-white text-2xl font-bold
                    transition-all duration-200 
                    sm:group-hover:top-9
                    -translate-y-1/2"
      >
        {title}
      </h2>
      <p className="absolute top-1/3 inset-x-0
                    px-4 text-center
                    flex items-center justify-center 
                    text-white text-md
                    transition-all duration-200 
                    sm:text-opacity-0 sm:group-hover:text-opacity-100"
      >
        {description}
      </p>
    </a>
  );
};




export default Project;
