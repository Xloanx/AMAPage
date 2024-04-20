import React, { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack';
import { getExperience } from './../data/experience';
import ExperienceDiv from './experienceDiv';

const ProfessionalExperience = () => {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        const fetchExperienceData = async () => {
          try {
            const response = await getExperience();
            if (!response) {
              throw new Error('Failed to fetch Experience');
            }
            setExperienceData(response);
          } catch (error) {
            console.error('Error fetching Experience:', error);
          }
        };
    
        fetchExperienceData();
      }, []);



  return (
            <div id="experience">
                <h1 className='headings' >Professional Experience</h1>

          
                    <div className='grid-container'>
                    {experienceData.map(experience =>(
                      <div className="grid-item" key={experience.id}>
                      <ExperienceDiv  experience={experience}/>
                      </div>
                    ))}
                    </div>                
            </div>
  )
}

export default ProfessionalExperience