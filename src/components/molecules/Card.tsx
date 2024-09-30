import React from 'react';
import Heading from '@components/atoms/Heading';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center">
        <img src={icon} alt={title} className="w-10 h-10 mr-4" />
        <Heading text={title} size="text-lg" />
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
