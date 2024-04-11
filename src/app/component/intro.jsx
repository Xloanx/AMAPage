import React from 'react'
import {useRouter} from 'next/navigation'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Button  from 'react-bootstrap/Button';




const Intro = ({links}) => {

  const github = links.github;
  const linkedIn = links.linkedIn;
  const resume = links.resume;

  const router = useRouter()
  const handleGitHubLink =(url) =>{
    window.open(url, '_blank');
  }

  const handleLinkedInLink = (url) =>{
    window.open(url, '_blank');
  }

  const handleCvDisplay = (url) =>{
    window.open(url, '_blank');
  }

  return (
    <div className='intro' id="intro">
    <p className='name'>Abiodun Muhammad-Ahmad Odukaye</p>
    <p className='role'> Senior Training & Development Specialist || FullStack Web Developer  </p>
    <div className="ProfileIconContainer">
      <button onClick={()=>handleGitHubLink(github)}>
      <FaGithub style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
        
      <button onClick={()=>handleLinkedInLink( linkedIn)}>
        <FaLinkedin  style={{ display: 'inline' }} size={25}/>
      </button>
            
    </div>
    <div>

    <Button 
      variant="dark" 
      className='resumeButton'
      onClick={()=>handleCvDisplay(resume)}>
        View My Resume
    </Button>
    </div>

     
    </div>
  )
}

export default Intro