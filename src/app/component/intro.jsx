import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Button, Box, Flex, Badge } from '@radix-ui/themes';
import Link from 'next/link';




const Intro = ({links}) => {

  const github = links.github;
  const linkedIn = links.linkedIn;
  const resume = links.resume;


  return (
    <div className='bg-slate-700 py-28' id="intro">
      <div className='mb-6'>
        <p className='font-sans text-5xl lg:text-6xl md:text-4xl sm:text-3xl text-slate-50 font-extrabold text-center'>Abiodun Muhammad-Ahmad </p>
        <p className='font-sans text-7xl lg:text-9xl md:text-6xl sm:text-5xl text-slate-50 font-extrabold text-center'>Odukaye</p>
      </div>
      <p className='font-mono text-2xl lg:text-2xl md:text-xl sm:text-lg tracking-wider text-slate-50 drop-shadow-md-2xl text-center mb-6'> Software/Machine Learning Engineer || Training & Development Specialist </p>

      <div className="flex justify-center text-slate-50 gap-x-4 mb-6">
          <Link href={github} passHref legacyBehavior>
            <a target="_blank">
              <FaGithub size={25}/>
            </a> 
          </Link>

          <Link href={linkedIn} passHref legacyBehavior>
            <a target="_blank"> 
              <FaLinkedin  size={25}/> 
            </a>
          </Link>   
      </div>

      <div className="flex justify-center ">
        <Badge variant="outline" radius="full"> 
          <Link href={resume} passHref legacyBehavior> 
            <a target="_blank">
              <span className="text-slate-50 text-base">View My Resume</span>
            </a>
        </Link> 
        </Badge>

      </div>
    </div>
  )
}

export default Intro