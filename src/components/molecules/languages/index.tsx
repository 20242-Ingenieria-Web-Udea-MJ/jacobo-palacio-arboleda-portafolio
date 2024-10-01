import React from 'react';
import ProgressBar from '@components/atoms/progressBar';

interface LanguagesProps {
  languages: { name: string; level: number }[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="space-y-2">
      {languages.map((language, index) => (
        <ProgressBar key={index} percentage={language.level} label={language.name} />
      ))}
    </div>
  );
};

export default Languages;
