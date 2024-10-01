// components/molecules/LanguageSkills.tsx
import React from 'react';
import ProgressBar from '@/components/atoms/progress-bar';

interface ProgrammingLanguagesProps {
  programmingLanguages: { name: string; level: number }[];
}

const ProgrammingLanguages: React.FC<ProgrammingLanguagesProps> = ({ programmingLanguages }) => {
  return (
    <div className="space-y-2">
      {programmingLanguages.map((ProgrammingLanguage, index) => (
        <ProgressBar key={index} percentage={ProgrammingLanguage.level} label={ProgrammingLanguage.name} />
      ))}
    </div>
  );
};

export default ProgrammingLanguages;
