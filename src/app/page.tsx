
import React from 'react';
import Intro from './component/intro'
import Skills from './component/skills'
import ProfessionalExperience from './component/professionalExperience';
import Projects from './component/projects'
import About from './component/about'
import Contact from './component/contact'
import BackToTop from './component/backToTop';



export default function Home() {

  const links = {
    linkedIn : "https://www.linkedin.com/in/abiodun-odukaye-847100164/",
    xtwitter : "https://twitter.com/AOdukaye76472",
    instagram: "https://www.instagram.com/engrxloanx/",
    github: "https://github.com/xloanx",
    resume: "/odukaye_abiodun_2025.pdf"
  }

  return (
   <>
   <Intro links={links}/>

   <Skills />
   
   <ProfessionalExperience />

   <Projects />

   <About />

   <Contact links={links}/>

   <BackToTop />
   </>
  );
}
