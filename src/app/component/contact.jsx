'use client'

import React from 'react'
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button  from 'react-bootstrap/Button';
import Link from 'next/link'


const contact = ({links}) => {

  const emailAddress = "odukayeabiodun@gmail.com";
  const phoneNumber = +2348029161741;

const handleSendEmail = () =>{
  const mailtoLink = "mailto:" + emailAddress;
  window.location.href = mailtoLink;
}

const handleWhatsAppLink =() =>{
  const whatsAppLink = `https://wa.me/${phoneNumber}`
  window.location.href = whatsAppLink;
  //window.open(whatsAppLink, '_blank');
}

const handlePhoneCall = () =>{
  
  const placeCall = "tel:" + phoneNumber;
  window.location.href = placeCall;
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
      <FaPhoneAlt style={{ display: 'inline', marginRight:"10px" }}/> 
        <Button variant="outline-success" onClick={handlePhoneCall}>{phoneNumber}</Button> <br /><br />

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
      <button onClick={handleWhatsAppLink}>
        <FaWhatsapp style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
    </p>
</div>
</div>
    </>
  )
}

export default contact


