import React from 'react';

const Project = ({ title, image, url }) => {
  return (
    <div className="w-48 h-36 relative bg-slate-200 bg-cover bg-center rounded-2xl overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className="absolute inset-0 flex items-center justify-center text-white">
        {title}
      </h2>
    </div>
  );
};



export default Project;
