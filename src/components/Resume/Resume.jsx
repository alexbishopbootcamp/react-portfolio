import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col gap-6 sm:p-2 p-6">
      <h1 className="text-3xl"> Resume and skills </h1>
      <a href="https://alexbi.shop/resume/" className="text-color-d font-bold hover:text-color-b transition-all" download>Download my Resume here</a>
      <h2 className="text-2xl">Web Development</h2>
      <ul className="list-disc list-inside">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
      </ul>
      <h2 className="text-2xl">Programming</h2>
      <ul className="list-disc list-inside">
        <li>Python</li>
        <li>C</li>
        <li>C++</li>
        <li>GLSL Shader Programming</li>
        <li>Lua</li>
        <li>x86 Assembly</li>
        <li>Java</li>
      </ul>
      
    </div>
  );
};

export default Resume;