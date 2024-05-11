'use client'

import React, {useState, useEffect} from 'react';
import SkillsCard from './skillsCard';
import { getSkills } from '../data/skills';

const Skills = () => {
    
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        const fetchSkillsData = async () => {
          try {
            const response = await getSkills();
            if (!response) {
              throw new Error('Failed to fetch Skills');
            }
            setSkillsData(response);
          } catch (error) {
            console.error('Error fetching Skills:', error);
          }
        };
    
        fetchSkillsData();
      }, []);


  return (
            <>
            <div style={{backgroundColor:"#333", height:"auto"}} id="skills">
                <h1 className='headings' style={{color:"#fff"}}>Skills</h1>
                <div className="skillContainer">
                {
                    skillsData.map(skillSet=>(
                            <SkillsCard key={skillSet.id} skillSet={skillSet} />
                    ))
                }
                </div>

                  
                {/* </Stack>  */}
            </div>        
        </>
    )
  }

export default Skills

