
import { getExperience } from './../data/experience';
import ExperienceDiv from './experienceDiv';
import {Flex, Box} from '@radix-ui/themes'

const ProfessionalExperience = async () => {
  const experienceData = getExperience();
    


  return (
            <div className='bg-slate-700 py-8 px-8' id="experience">
                <h1 className='font-sans text-3xl lg:text-4xl md:text-2xl sm:text-xl text-slate-50 font-extrabold text-center mb-4' >Professional Experience</h1>
                          
                    <Flex gap="3" wrap="wrap" >
                    {experienceData.map(experience =>(
                      <div className="grid-item" key={experience.id}>
                      <ExperienceDiv  experience={experience}/>
                      </div>
                    ))}
                    </Flex>   

                    
            </div>
  )
}

export default ProfessionalExperience