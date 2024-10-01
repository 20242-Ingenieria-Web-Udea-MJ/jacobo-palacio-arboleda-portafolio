// src/components/organisms/RightBar.tsx
import React from 'react';
import IconButton from '@components/atoms/iconButton'; // Asegúrate de tener este componente
import Heading from '@components/atoms/heading';

const RightBar: React.FC = () => {
  const socialLinks = [
    { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/jacobo-palacio-arboleda-4877937a/' },
    { icon: 'mdi:github', link: 'https://www.github.com/jeyko55' },
  ];

  return (
    <aside className="w-24 bg-gray-200 shadow-lg p-4">
      <Heading level={3} className="text-center mb-4">Links</Heading>
      <div className="flex flex-col items-center">
        {socialLinks.map((social, index) => (
          <IconButton key={index} icon={social.icon} link={social.link} />
        ))}
      </div>
    </aside>
  );
};

export default RightBar;
