import React from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image src={image} alt={title} width={300} height={200} className="rounded-lg" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default PortfolioItem;
