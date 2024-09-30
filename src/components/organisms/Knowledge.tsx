import React from 'react';
import Card from '../molecules/Card';

interface Skill {
  title: string;
  description: string;
  icon: string;
}

interface KnowledgeProps {
  skills: Skill[];
}

const Knowledge: React.FC<KnowledgeProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <Card
          key={index}
          title={skill.title}
          description={skill.description}
          icon={skill.icon}
        />
      ))}
    </div>
  );
};

export default Knowledge;
