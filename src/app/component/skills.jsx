import SkillsCard from './skillsCard';
import { getSkills } from '../data/skills';

const Skills = () => {
    const skillsData = getSkills();
    


  return (
            <>
            <div className="bg-slate-300 py-8 px-8" id="skills">
                <h1 className='font-sans text-3xl lg:text-4xl md:text-2xl sm:text-xl text-slate-950 font-extrabold text-center mb-4' >
                    Skills
                </h1>
                <div className="flex flex-wrap gap-x-4 gap-y-4 mx-auto">
                    {
                        skillsData.map(skillSet=>(
                                <SkillsCard key={skillSet.id} skillSet={skillSet} />
                        ))
                    }
                </div> 
            </div>        
        </>
    )
  }

export default Skills

