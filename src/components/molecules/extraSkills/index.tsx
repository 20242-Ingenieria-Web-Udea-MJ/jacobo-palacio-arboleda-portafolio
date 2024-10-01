import React from 'react';
import AnalyticsUpIcon from '@/components/atoms/analyticsUpIcon';

interface Skill {
  name: string;
}

interface ExtraSkillsProps {
  skills: Skill[];
}

const ExtraSkills: React.FC<ExtraSkillsProps> = ({ skills }) => {
    return (
      <div className="mt-2">
        <ul className="list-none space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <AnalyticsUpIcon />
              <span className="ml-2">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ExtraSkills;
