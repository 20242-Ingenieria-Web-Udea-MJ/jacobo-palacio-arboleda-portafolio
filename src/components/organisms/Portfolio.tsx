import React from 'react';
import Card from '../molecules/Card';

interface Project {
  title: string;
  description: string;
  image: string;
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <div className="overflow-x-scroll flex space-x-4 p-4">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          icon={project.image}
        />
      ))}
    </div>
  );
};

export default Portfolio;
