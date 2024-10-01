// components/organisms/LeftBar.tsx
import React from 'react';
import ProfilePhoto from '@components/atoms/profilePhoto';
import Heading from '@components/atoms/heading';
import Text from '@/components/atoms/text';
import PersonalInfo from '@/components/molecules/personalInfo';
import Languages from '@/components/molecules/languages';
import ProgrammingLanguages from '@/components/molecules/programmingLanguages';
import ExtraSkills from '@/components/molecules/extraSkills';

interface LeftBarProps {
  user: {
    photoUrl: string;

    name: string;
    title: string;

    phoneNumber: string;
    mail: string;
    location: string;
    freelance: boolean;

    languages: { name: string; level: number }[];

    programmingLanguages: { name: string; level: number }[];

    extraSkills: { name: string }[]; // Solo pasamos el nombre de la habilidad, ya que el ícono ya se define dentro de ExtraSkills
  };
}

const LeftBar: React.FC<LeftBarProps> = ({ user }) => {
  return (
    <aside className="w-72 bg-gray-200 shadow-lg p-4">
      <ProfilePhoto src={user.photoUrl} alt={user.name} />
      <Heading level={2} className="text-center mt-4 text-sm">
        {user.name}
      </Heading>
      <Text className="text-center text-gray-500 text-xs">
        {user.title}
      </Text>

      <div className="mt-6">
        <Heading level={3} className="mb-2">Personal Info</Heading>
        <PersonalInfo
          phoneNumber={user.phoneNumber}
          mail={user.mail}
          location={user.location}
          freelance={user.freelance}
        />
      </div>

      <div className="mt-6">
        <Heading level={3} className="mb-2">Languages</Heading>
        <Languages languages={user.languages} />
      </div>

      <div className="mt-6">
        <Heading level={3} className="mb-2">Programming languages</Heading>
        <ProgrammingLanguages programmingLanguages={user.programmingLanguages} />
      </div>

      <div className="mt-6">
        <Heading level={3} className="mb-2">Extra skills</Heading>
        <ExtraSkills skills={user.extraSkills} />
      </div>

    </aside>
  );
};

export default LeftBar;
