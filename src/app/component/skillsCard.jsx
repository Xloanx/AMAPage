import React from 'react'
import Card from 'react-bootstrap/Card';

const SkillsCard = ({skillSet}) => {
    return (

      <div className="cardContainer" >
        <div className="custom-card" >
          <div className="custom-card-header">
            <h5 className="custom-card-title sub-headings1">{skillSet.skill}</h5>
          </div>
          <div className="custom-card-body">
            <p className="card-text writeUp4Container">{skillSet.skillText}</p>
          </div>
        </div>
      </div>
      );
}

export default SkillsCard