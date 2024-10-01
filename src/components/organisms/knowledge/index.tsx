// src/components/organisms/MyKnowledge.tsx
import React from 'react';
import KnowledgeCard from '@/components/molecules/knowledgeCard';

const Knowledge: React.FC = () => {
  const skills = [
    { icon: 'uil:android', title: 'Android Development', description: 'Kotlin, Jetpack Compose, Room, Retrofit, MVVM and more.' },
    { icon: 'mdi:palette', title: 'UI/UX Design', description: 'Design principles and tools.' },
    { icon: 'file-icons:firebase', title: 'Google Firebase Services', description: 'App Hosting, Authentication, Cloud Firestore, Machine Learning, etc' },
    // Agrega más habilidades aquí
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Knowledge</h2>
        <div className="grid grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <KnowledgeCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
