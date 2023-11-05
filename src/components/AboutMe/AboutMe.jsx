import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-6 sm:p-2 p-6">
      <h1 className="text-4xl text-color-a font-medium"> Alex Bishop </h1>
      <img className="w-40 h-40 rounded" src="profile.png" alt="Me" />
      <p className="text-md">
        I am a full stack web developer with a passion for learning new
        technologies and creating engaging applications. I have experience
        working with JavaScript, React, Node.js, Express.js, MongoDB, MySQL,
        and more. I am currently looking for a full stack web developer
        position.
      </p>
      <p className="text-md">
        I love learning new programming languages, techniques, and pushing
        the boundaries of what I can do.
      </p>
      <p className="text-md">
        Please see my <a href="/portfolio" className="text-color-d font-bold hover:text-color-c transition-all" download>portfolio</a> for
        examples of my work
      </p>
    </div>
  );
};

export default AboutMe;
