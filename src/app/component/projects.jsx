
import React from 'react'
import ProjectCarousel from './project-carousel';

const Projects = () => {
  return (
    <div className="bg-slate-300 py-8 px-8" id="projects">

    <h1 className='font-sans text-3xl lg:text-4xl md:text-2xl sm:text-xl text-slate-950 font-extrabold text-center mb-4' >
        Projects
    </h1>
    <ProjectCarousel />
 
    </div>
  )
}

export default Projects