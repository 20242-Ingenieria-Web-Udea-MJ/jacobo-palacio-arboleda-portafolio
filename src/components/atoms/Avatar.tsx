import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <img className="rounded-full w-24 h-24" src={src} alt={alt} />
  );
};

export default Avatar;
