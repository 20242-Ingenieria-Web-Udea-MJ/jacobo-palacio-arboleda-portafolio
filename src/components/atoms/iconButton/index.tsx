import React from 'react';
import { Icon } from '@iconify/react';

interface IconButtonProps {
  icon: string;
  link: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full bg-primary w-10 h-10 mb-2">
      <Icon icon={icon} className="text-black" />
    </a>
  );
};

export default IconButton;
