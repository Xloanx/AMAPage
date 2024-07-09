import React from 'react';
import { Card, Text,  } from '@radix-ui/themes';

const SkillsCard = ({skillSet}) => {
    return (

      // <div className="cardContainer" >
      //   <div className="custom-card" >
      //     <div className="custom-card-header">
      //       <h5 className="custom-card-title sub-headings1">{skillSet.skill}</h5>
      //     </div>
      //     <div className="custom-card-body">
      //       <p className="card-text writeUp4Container">{skillSet.skillText}</p>
      //     </div>
      //   </div>
      // </div>

      <Card variant="surface" size="2"className='w-full max-w-96' >
          <Text as="div" size="5" weight="bold">
          {skillSet.skill}
          </Text>
          <Text as="div" color="gray" size="2">
          {skillSet.skillText}
          </Text>
        </Card>


      );
}

export default SkillsCard