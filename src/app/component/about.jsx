// src/components/About.js
import React from 'react';


const About = () => {
  return (
    <div className='bg-slate-700 py-8 px-8' id="about">
    <h1 className='font-sans text-3xl lg:text-4xl md:text-2xl sm:text-xl text-slate-50 font-extrabold text-center mb-4'>About Me</h1>
    <div className='text-base text-justify text-slate-50 font-sans font-medium items-left self-start'>
    <p>
    Hello, my name is Abiodun Muhammad-Ahmad Odukaye and I am from Lagos, Nigeria. 
    I am a Senior Training & Development Specialist with the Industrial Training Fund (ITF) - A 
    Federal Government of Nigeria Agency charged with the responsibiliity of developing the Nation&apos;s Human Resource.
    I joined ITF in 2014 and I have over time consulted for various organizations and trained several partcipants on
    various technical, business, leadership and management workshops.
    </p><br />
    
    <p>
    An avid Tech enthusiast with a robust background spanning multiple years within the technology sector, adeptly 
    navigating various domains to spearhead innovation initiatives. Demonstrated expertise in conceptualizing and 
    developing Enterprise Applications geared towards enhancing process efficiency and productivity.
    </p>
    </div>
    </div>
  );
  
};

export default About;
