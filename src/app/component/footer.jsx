import React from 'react';
import { Flex } from '@radix-ui/themes';
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import "../globals.css";


const Footer = () => {
  return (
          <footer className="footer bg-neutral text-neutral-content  p-3">

<div class="grid grid-cols-3 gap-4">

  <div class="col-start-1 col-end-2 ...">
  <p>Built by Xloanx &copy; {new Date().getFullYear()}</p>

  </div>

  <div class="col-start-3 col-end-4 text-center">
  <p className='text-center'>Powered with 
                <FaReact style={{ display: 'inline' }} />   and 
                <TbBrandNextjs style={{ display: 'inline' }} />. <br/> 
              </p>
  </div>
</div>
        </footer>
  )
}

export default Footer
 
