import React from 'react';
import Image from 'next/image'

interface ProfilePhotoProps {
  src: string;
  alt: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src, alt }) => {
  return (
    <Image 
      className='rounded-full mx-auto'
      src={src} 
      alt={alt}
      width={150}
      height={150}
    />
  );
};

export default ProfilePhoto;
