"use client"

import React, { useState } from 'react';
import Link from 'next/link'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Button as BsButton} from 'react-bootstrap';


const ExperienceDiv = ({ experience }) => {
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);
    const toggleAdditionalContent = () => {
        setShowAdditionalContent(!showAdditionalContent);
      };

  return (
    <div className="tabular-div" >
        <div className="tabular-row">
            <div className="tabular-cell" style={{fontSize:"14px"}}>
                {experience.date.start + " - "+ experience.date.to} <br /> {experience.type}
            </div>
            <div className="tabular-cell">
                <p className='sub-headings' style={{textAlign:"left"}}>
                    {experience.role}
                </p>
                <Link href={experience.company.url} className='sub-headings'> {"("+experience.company.name+")"}</Link><br /> <br />
                <div className='toolsContainer'>
                {experience.tools.map(tool=>(
                    <>
                    <div className='toolDiv' style={{display:"inline"}}>
                            {tool}
                    </div>
                    </>
                ))}
                </div>

                {showAdditionalContent && 
                    <div>{experience.job_desription.map(desc=>( 
                        <div className='writeUp3Container'>
                            <p>{desc}</p><br/>
                        </div>
                            ))}
                    </div>}

                        <BsButton onClick={toggleAdditionalContent}
                                variant="primary"
                                size="sm">
                            {showAdditionalContent ? < BiSolidUpArrow />  : <BiSolidDownArrow /> }
                        </BsButton>

            </div>
        </div>
    </div>
  )
}

export default ExperienceDiv