// pages/index.tsx
import React from 'react';
import Profile from '../components/organisms/Profile';
import Knowledge from '../components/organisms/Knowledge';
import Portfolio from '../components/organisms/Portfolio';
import Sidebar from '../components/molecules/SideBar';

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
  description: string;
  languages: Language[];
  programmingLanguages: Language[];
}

interface Skill {
  title: string;
  description: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

const userInfo: UserInfo = {
  name: "Jacobo Palacio",
  title: "Jr. Android Developer",
  photo: "/path/to/photo.jpg",
  city: "Medellín, Colombia",
  phone: "+57 3052553972",
  email: "jacobopalacio2602@gmail.com",
  description: "Junior Android Developer with experience in Kotlin. Familiar with MVVM, Retrofit, Room and Coroutines. Skilled in Git and Agile Development with Azure DevOps. Interested in clean architecture and unit testing (Mockito). Passionate about continuous learning and implementing best practices in software development.",
  languages: [
    { name: "Spanish", proficiency: 100 },
    { name: "English", proficiency: 60 },
  ],
  programmingLanguages: [
    { name: "Kotlin-Java", proficiency: 90 },
    { name: "Python", proficiency: 40 },
    { name: "SQL", proficiency: 60 },
  ]
};

const skills: Skill[] = [
  { title: "Android Development", description: "Jetpack Compose is Android's recommended modern toolkit for building native UI", icon: "/path/to/react-icon.svg" },
  { title: "", description: "Entorno de ejecución para JavaScript", icon: "/path/to/node-icon.svg" },
];

const projects: Project[] = [
  { title: "Proyecto 1", description: "Descripción del proyecto", image: "/path/to/project1.jpg" },
  { title: "Proyecto 2", description: "Descripción del proyecto", image: "/path/to/project2.jpg" },
];

const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar userInfo={userInfo} />
      <div className="ml-64 p-8">
        <Profile user={userInfo} />
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Conocimientos</h2>
          <Knowledge skills={skills} />
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Portafolio</h2>
          <Portfolio projects={projects} />
        </section>
      </div>
    </div>
  );
};

export default Home;
