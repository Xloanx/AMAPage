import React from 'react'
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button  from 'react-bootstrap/Button';
import Link from 'next/link'


const contact = ({links}) => {

const handleSendEmail = () =>{
  const emailAddress = "odukayeabiodun@gmail.com";
  const mailtoLink = "mailto:" + emailAddress;
  // Open the user's default email client with the mailto link
  window.location.href = mailtoLink;
}

const handleGitHubLink =(url) =>{
  // router.push("https://github.com/xloanx")
  window.open(url, '_blank');
}

const handleLinkedInLink = (url) =>{
  window.open(url, '_blank');
}

const handleInstagramLink = (url) =>{
  window.open(url, '_blank');
}

const handleXTwitterLink = (url) =>{
  window.open(url, '_blank');
}



  return (
    <>
        <div style={{backgroundColor:"#333", height:"60vh"}} id="contact">

<h1 className='headings' style={{color:"#fff"}}>Contact Me</h1>

<div className='writeUp2Container'>
    <p >
      Whether Large or small projects, quality project delivery is the watch word! <br/><br/>
      Ready to start? You can reach me through the media below.<br /><br />
      <Button variant="outline-success" onClick={handleSendEmail}>Send me an email!</Button> <br /><br />
    </p >
    
    <p > 
      <FaPhoneAlt style={{ display: 'inline', marginRight:"10px" }}/> +2348029161741 <br /><br />
      <button onClick={()=>handleLinkedInLink("https://www.linkedin.com/in/abiodun-odukaye-847100164/")}>
        <FaLinkedin style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button onClick={()=>handleXTwitterLink("https://twitter.com/AOdukaye76472")}>
        <FaXTwitter style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button onClick={()=>handleInstagramLink("https://www.instagram.com/engrxloanx/")}>
        <FaInstagram style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button onClick={()=>handleGitHubLink("https://github.com/xloanx")}>
        <FaGithub style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
    </p>
</div>
</div>
    </>
  )
}

export default contact


