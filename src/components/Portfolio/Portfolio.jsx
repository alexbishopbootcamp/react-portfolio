import React from 'react';
import Project from '../Project/Project';

const projects = [
  {
    id: 1,
    title: 'Lyrynx',
    description: 'An app that streams music from Spotify and displays the lyrics underneath',
    image: 'lyrynx.png',
    link: 'https://github.com/alexbishopbootcamp/music-lyric-player',
  },
  {
    id: 2,
    title: 'Scribble Space',
    description: "A user-friendly task management and planning application designed to help you stay organized and productive.",
    image: 'scribble-space.png',
    link: 'https://github.com/Daniel-Bindig/scribble-space',
  },
  {
    id: 3,
    title: 'Password Generator',
    description: 'An easy to use utility for generating passwords with selectable character sets and password length',
    image: 'password-generator.jpg',
    link: 'https://github.com/alexbishopbootcamp/password-generator',
  },
  {
    id: 4,
    title: 'Project',
    description: 'Project description',
    image: 'placeholder.jpg',
    link: 'https://github.com/',
  },
  {
    id: 5,
    title: 'Project',
    description: 'Project description',
    image: 'placeholder.jpg',
    link: 'https://github.com/',
  },
  {
    id: 6,
    title: 'Project',
    description: 'Project description',
    image: 'placeholder.jpg',
    link: 'https://github.com/',
  }
]

const Portfolio = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-full m-auto p-0
      sm:flex-row sm:max-w-screen-lg sm:p-8">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Portfolio;
