import React from 'react';
import Avatar from '@components/atoms/Avatar';
import Heading from '@components/atoms/Heading';

interface Language {
  name: string;
  proficiency: number;
}

interface UserInfo {
  name: string;
  title: string;
  photo: string;
  city: string;
  phone: string;
  email: string;
  languages: Language[];
  programmingLanguages: Language[];
}

interface SidebarProps {
  userInfo: UserInfo;
}

const Sidebar: React.FC<SidebarProps> = ({ userInfo }) => {
  return (
    <div className="w-64 fixed h-full bg-gray-100 p-8">
      <Avatar src={userInfo.photo} alt={userInfo.name} />
      <Heading text={userInfo.name} size="text-2xl" />
      <p className="text-gray-500">{userInfo.title}</p>
      
      <div className="mt-8">
        <Heading text="Contact" size="text-lg" />
        <p>{userInfo.city}</p>
        <p>{userInfo.phone}</p>
        <p>{userInfo.email}</p>
      </div>

      <div className="mt-8">
        <Heading text="Idiomas" size="text-lg" />
        {userInfo.languages.map((lang, idx) => (
          <p key={idx}>{lang.name} - {lang.proficiency}%</p>
        ))}
      </div>

      <div className="mt-8">
        <Heading text="Lenguajes de Programación" size="text-lg" />
        {userInfo.programmingLanguages.map((lang, idx) => (
          <p key={idx}>{lang.name} - {lang.proficiency}%</p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
