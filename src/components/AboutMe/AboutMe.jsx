import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4 sm:p-2 p-6">
      <h1 className="text-3xl"> About Me </h1>
      <img className="w-48 h-48 rounded" src="profile.png" alt="Me" />
      <p className="text-md">
        I am a full stack web developer with a passion for learning new
        technologies and creating engaging applications. I have experience
        working with JavaScript, React, Node.js, Express.js, MongoDB, MySQL,
        and more. I am currently looking for a full stack web developer
        position.
      </p>
    </div>
  );
};

export default AboutMe;
