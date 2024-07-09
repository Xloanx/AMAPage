"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge, Box } from '@radix-ui/themes';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Button as BsButton} from 'react-bootstrap';


const ExperienceDiv = ({ experience }) => {
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);
    const toggleAdditionalContent = () => {
        setShowAdditionalContent(!showAdditionalContent);
      };

  return (
<div className="bg-slate-300 rounded-2xl w-full max-w-xl  shadow-xl">
                      <div className="flex justify-between items-center p-4">
                        <div className="w-1/4 text-xs font-sans font-medium items-left self-start">
                        {experience.date.start + " - "+ experience.date.to} <br /> {experience.type}
                        </div>

                        <div className="w-3/4 items-right">
                          <Box>
                          <h2 className="card-title">{experience.role}</h2>

                          <div>
                            <Link href={experience.company.url} className='text-sm font-sans text-center'> {experience.company.name}</Link>
                          </div>
                          {experience.tools.map(tool=>(
                                <div key={tool} className='space-x-4' style={{display:"inline"}}>
                                <Badge  variant="outline" color="gray" >
                                <span className='text-orange-900'>{tool}</span> 
                                </Badge>
                                </div>
                            ))}

                        {showAdditionalContent && 
                        <div>{experience.job_desription.map(desc=>( 
                            <div key={desc} className='text-xs font-sans text-justify font-medium items-left self-start'>
                                <p>{desc}</p><br/>
                            </div>
                                ))}
                        </div>}

                        <div >
                            <button onClick={toggleAdditionalContent}
                                    className="btn btn-xs items-end">
                                {showAdditionalContent ? < BiSolidUpArrow />  : <BiSolidDownArrow /> }
                            </button>
                        </div>
                          </Box>
                        </div>
                      </div>
                    </div> 
  )
}

export default ExperienceDiv