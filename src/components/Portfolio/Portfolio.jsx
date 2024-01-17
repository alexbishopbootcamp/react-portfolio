import React from 'react';
import Project from '../Project/Project';

const projects = [
  {
    id: 1,
    title: 'ScrambleMail',
    description: 'An email proxy service that protects against data breaches',
    image: 'scramblemail.png',
    deployment: 'https://scramble.email/',
    github: 'https://github.com/alexbishopbootcamp/scramblemail',
  },
  {
    id: 2,
    title: 'Lyrynx',
    description: 'An app that streams music from Spotify and displays the lyrics underneath',
    image: 'lyrynx.png',
    deployment: 'https://alexbishopbootcamp.github.io/music-lyric-player/',
    github: 'https://github.com/alexbishopbootcamp/music-lyric-player',
  },
  {
    id: 3,
    title: 'Scribble Space',
    description: "A user-friendly task management and planning app designed to help you stay organized and productive.",
    image: 'scribble-space.png',
    deployment: 'https://gentle-journey-56421-d5fa88de413f.herokuapp.com/',
    github: 'https://github.com/Daniel-Bindig/scribble-space',
  },
  {
    id: 4,
    title: 'Password Generator',
    description: 'An easy to use utility for generating passwords with selectable character sets and password length',
    image: 'password-generator.jpg',
    deployment: 'https://alexbishopbootcamp.github.io/password-generator/',
    github: 'https://github.com/alexbishopbootcamp/password-generator',
  },
  {
    id: 5,
    title: 'Code Quiz',
    description: 'A timed quiz on Javascript fundamentals that locally stores high scores',
    image: 'code-quiz.png',
    deployment: 'https://alexbishopbootcamp.github.io/code-quiz/',
    github: 'https://github.com/alexbishopbootcamp/code-quiz',
  },
  {
    id: 6,
    title: 'Work Day Scheduler',
    description: 'A calendar app for scheduing events throughout a work day',
    image: 'scheduler.png',
    deployment: 'https://alexbishopbootcamp.github.io/work-day-scheduler/',
    github: 'https://github.com/alexbishopbootcamp/work-day-scheduler',
  },
  {
    id: 7,
    title: 'Readme Generator',
    description: 'An easy to use readme generator for new projects',
    image: 'readme.png',
    deployment: 'https://github.com/alexbishopbootcamp/readme-generator',
    github: 'https://github.com/alexbishopbootcamp/readme-generator',
  }
]

const Portfolio = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-full sm:p-2
    gap-1 sm:flex-row">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          deployment={project.deployment}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default Portfolio;
