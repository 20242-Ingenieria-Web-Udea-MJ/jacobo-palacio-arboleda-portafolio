import React from 'react';
import EducationItem from '@/components/molecules/education-item';

const Education: React.FC = () => {
  const education = [
    { institution: 'University of Antioquia', degree: 'Student', year: '2018 - Present' },
    { institution: 'Meta Course: Introduction to Android Mobile App Development', degree: 'Graduate', year: '2024' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Education</h2>
        <div className="space-y-4">
          {education.map((item, index) => (
            <EducationItem key={index} institution={item.institution} degree={item.degree} year={item.year} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
