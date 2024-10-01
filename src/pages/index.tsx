import React from 'react';
import LeftBar from '@/components/organisms/leftBar';
import ProgrammingLanguages from '@/components/molecules/programmingLanguages';
import RightBar from '@/components/organisms/rightBar';

const HomePage: React.FC = () => {
  const user = {
    photoUrl: '/photo.png',

    name: "Jacobo Palacio",
    title: "Jr. Android Developer",

    phoneNumber: "+57 3052553972",
    mail: "jacobopalacio2602@gmail.com",
    location: "Bello, Antioquia",
    freelance: true,

    languages: [
      { name: "Spanish", level: 100 },
      { name: "English", level: 60 },
    ],

    programmingLanguages: [
      { name: "Kotlin - Java", level: 80 },
      { name: "Html - CSS - Javascript", level: 60 },
      { name: "SQL", level: 60 },
      { name: "Python", level: 50 },
    ],
    extraSkills: [
      { name: "Jetpack Compose" },
      { name: "Room" },
      { name: "Retrofit" },
      { name: "Google Firebase" },
      { name: "MVVM" },
      { name: "Scrum - Azure DevOps" },
      { name: "Git -GitHub" },
    ],
  };

  return (
    <div className="flex">
      <LeftBar user={user} />
      <main className="flex-grow p-8">
        {/* Aquí va el contenido principal */}
      </main>
      <RightBar />
    </div>
  );
};

export default HomePage;
