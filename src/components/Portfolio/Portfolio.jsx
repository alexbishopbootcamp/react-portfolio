import React from 'react';
import Project from '../Project/Project';

const projects = [
  {
    title: 'Project1',
    description: 'Project1 description',
    image: 'project1.png',
    link: 'https://github.com/',
  },
  {
    title: 'Project2',
    description: 'Project2 description',
    image: 'project2.jpg',
    link: 'https://github.com/',
  },
  {
    title: 'Project3',
    description: 'Project3 description',
    image: 'project3.png',
    link: 'https://github.com/',
  },
]

const Portfolio = () => {
  return (
    <div className="flex justify-between max-w-screen-md m-auto px-20 py-8">
      {projects.map((project) => (
        <Project
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Portfolio;
