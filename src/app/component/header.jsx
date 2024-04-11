'use client'
// src/components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaUser } from "react-icons/fa";
import img from "./../logo_transparent.png";

const Header = () => {

  const navLinks = [
    {name: "About", href:"#about"},
    {name: "Skills", href:"#skills"},
    {name: "Experience", href:"#experience"},
    {name: "Projects", href:"#projects"},
    {name: "Contact", href:"/#contact"},
  ];

  const pathName = usePathname();

  return (
    <header>
          <div className='logo'>
          <Image src={img} alt='AMA Logo'/>
          </div>
          <nav className='navigation'>
            <ul>
              {
                navLinks.map((link, index) =>{
                  const isActive = pathName.startsWith(link.href)

                  return(
                  <li className={isActive ? "active" : ""} key={index}>
                    <Link href={link.href} > {link.name}  </Link>
                  </li>
                )})
              }
              {/* <li><Link href="#about">About</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li> */}
            </ul>
          </nav>
          <div className="headerUser">
            <FaUser />
            {/* <Link href="#">Login</Link> */}
          </div>
    </header>



  );
};

export default Header;
