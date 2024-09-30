import React from 'react';

interface HeadingProps {
  text: string;
  size?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, size = "text-xl" }) => {
  return <h2 className={`${size} font-bold text-gray-800`}>{text}</h2>;
};

export default Heading;
