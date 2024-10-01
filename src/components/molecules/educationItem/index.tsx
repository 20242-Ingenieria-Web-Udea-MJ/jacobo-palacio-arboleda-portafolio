import React from 'react';

interface EducationItemProps {
  institution: string;
  degree: string;
  year: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree, year }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex justify-between">
      <div className='flex-1 text-left'>
        <h3 className="text-xl font-semibold">{institution}</h3>
        <p className="text-gray-500">{degree}</p>
      </div>
      <span className="text-gray-400">{year}</span>
    </div>
  );
};

export default EducationItem;
