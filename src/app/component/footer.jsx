import React from 'react';
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import "../globals.css";


const Footer = () => {
  return (
    <footer className="footer"> 
    <div className='borderDownDiv'>
      <p className='writeUp4Container' style={{textAlign:"left"}}>Built by Xloanx &copy; 2024 </p> 
    </div>
      <p style={{textAlign:"center"}}>Powered with 
        <FaReact style={{ display: 'inline' }} />   and 
        <TbBrandNextjs style={{ display: 'inline' }} />. <br/> 
      </p>
    
    
  </footer>   
  )
}

export default Footer
 
