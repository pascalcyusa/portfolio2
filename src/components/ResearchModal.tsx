import React from 'react';
import { ResearchProject } from '../data/researchData';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ResearchProject | null;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-6 text-gray-700">{project.description}</p>
        
        <div className="mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="text-gray-600">
          <p className="mb-2">{project.lab}</p>
          <p className="mb-4">{project.period}</p>
        </div>
      </div>
    </div>
  );
};