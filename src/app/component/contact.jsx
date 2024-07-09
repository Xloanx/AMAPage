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
        <div className="bg-slate-300 py-8 px-8" id="contact">

<h1 className='font-sans text-3xl lg:text-4xl md:text-2xl sm:text-xl text-slate-950 font-extrabold text-center mb-4'>Contact Me</h1>

<div className='text-base text-amber-950 font-sans font-medium items-center self-start'>
    <p className='text-center'>
      Whether Large or small projects, quality project delivery is the watch word! <br/><br/>
      Ready to start? You can reach me through the media below.<br /><br />
      <Button variant="outline-success" onClick={handleSendEmail}>Send me an email!</Button> <br /><br />
    </p >
    
    <p className='text-center'> 
      <FaPhoneAlt className="text-green-500" style={{ display: 'inline', marginRight:"10px" }}/> 
        <Button  className="text-green-500" variant="outline-success" onClick={handlePhoneCall}>{phoneNumber}</Button> <br /><br />

      <button  className="text-blue-500" onClick={()=>handleLinkedInLink("https://www.linkedin.com/in/abiodun-odukaye-847100164/")}>
        <FaLinkedin style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button  className="text-stone-950" onClick={()=>handleXTwitterLink("https://twitter.com/AOdukaye76472")}>
        <FaXTwitter style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button  className="text-pink-500" onClick={()=>handleInstagramLink("https://www.instagram.com/engrxloanx/")}>
        <FaInstagram style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button className="text-stone-950" onClick={()=>handleGitHubLink("https://github.com/xloanx")}>
        <FaGithub style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
      <button className='text-green-500' onClick={handleWhatsAppLink}>
        <FaWhatsapp style={{ display: 'inline', marginRight:"10px" }} size={25}/>
      </button>
    </p>
</div>
</div>
    </>
  )
}

export default contact


