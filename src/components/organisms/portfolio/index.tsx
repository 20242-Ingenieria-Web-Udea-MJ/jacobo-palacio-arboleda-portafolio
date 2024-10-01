import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: 'FashionApp',
    description: 'A mobile app developed in Kotlin for fashion lovers. It provides fashion tips, outfit ideas, and allows users to buy trendy clothes.',
    imageUrl: '/fashionapp.png', // Imagen correspondiente al proyecto
    githubLink: 'https://github.com/jeyko55/fashion-app-movil-kotlin',
  },
  {
    title: 'AppTunelOriente',
    description: 'An app that provides real-time information about the Oriente Tunnel, including traffic, weather, and toll costs.',
    imageUrl: '/apptuneloriente.png', // Imagen correspondiente al proyecto
    githubLink: 'https://github.com/jeyko55/app-tunel-oriente',
  },
  // Puedes añadir más proyectos aquí
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Portfolio</h2>
        <div className="flex overflow-x-auto space-x-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg p-4 w-80 rounded-lg">
              <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="rounded-lg"/>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                className="mt-4 bg-primary text-white py-2 px-4 rounded-lg inline-block"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
