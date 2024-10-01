// src/components/molecules/KnowledgeCard.tsx
import React from 'react';
import { Icon } from '@iconify/react';

interface KnowledgeCardProps {
  icon: string;
  title: string;
  description: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-center">
      <Icon icon={icon} className="text-4xl text-primary mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
