import React from 'react';
import LeftBar from '@/components/organisms/left-bar';
import RightBar from '@/components/organisms/right-bar';
import ProfileHeader from '@/components/organisms/profile-header';
import Knowledge from '@/components/organisms/knowledge';
import Education from '@/components/organisms/education';
import Portfolio from '@/components/organisms/portfolio';
import Footer from '@/components/atoms/footer';

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
      { name: "React Native", level: 40 },
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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex">
        <LeftBar user={user} />
        <main className="flex-grow p-8 overflow-y-auto h-screen"> {/* Agregamos el scroll y fijamos la altura */}
          <div>
            <ProfileHeader />
            <Knowledge />
            <Education />
            <Portfolio />
          </div>
        </main>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
