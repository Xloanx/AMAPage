'use client'

// src/components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaUser } from "react-icons/fa";
import img from "./../logo_transparent_1.png";

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
      <div className="navbar bg-transparent sm:bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-active lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 sm:bg-base-300 rounded-box w-52">
            {
                navLinks.map((link, index) =>{
                  const isActive = pathName.startsWith(link.href)

                  return(
                  <li className={isActive ? "active" : ""} key={index}>
                    <Link href={link.href} > {link.name}  </Link>
                  </li>
                )})
              }
            </ul>
          </div>
          <Image src={img} alt='AMA Logo'/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
                navLinks.map((link, index) =>{
                  const isActive = pathName.startsWith(link.href)

                  return(
                  <li className={isActive ? "active" : ""} key={index}>
                    <Link href={link.href} > {link.name}  </Link>
                  </li>
                )})
              }
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
     </header>



  );
};

export default Header;
