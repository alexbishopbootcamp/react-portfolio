import React from 'react';

const AboutMe = () => {
  return (
    <div className="sm:pt-8 flex flex-col gap-4">
      <h1 className="font-bold text-lg"> About Me </h1>
      <img className="w-48 h-48" src="profile.png" alt="Me" />
      <p className="text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, quis ali
        quam elit neque non nisi. Donec sit amet massa quis diam aliquet aliquam. Donec euismod, nisi sed convallis interdum, quam ante aliquam
        ante, a ultricies lorem nisl non nisl. Nulla facilisi. Nullam euismod, sapien nec aliquet vulputate, metus quam dictum nisl, nec
        fermentum sem nisl quis nunc. Nulla facilisi. Donec auctor, nisl non aliquet ultrices, velit nisl aliquam orci, nec tincidunt
        sapien nisl vitae nisl.
      </p>
    </div>
  );
};

export default AboutMe;
