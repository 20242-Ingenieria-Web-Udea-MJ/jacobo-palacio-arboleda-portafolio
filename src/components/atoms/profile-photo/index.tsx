import React from 'react';
import Image from 'next/image';

interface ProfilePhotoProps {
  src: string;
  alt: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src, alt }) => {
  return (
    <div className="bg-white rounded-full p-2 w-40 h-40 mx-auto flex items-center justify-center"> {/* Fondo blanco con padding */}
      <Image 
        className='rounded-full' 
        src={src} 
        alt={alt}
        width={150}
        height={150}
      />
    </div>
  );
};

export default ProfilePhoto;
