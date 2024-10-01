// src/components/atoms/InfoDialog.tsx
import React from 'react';

interface InfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoDialog: React.FC<InfoDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
        I really enjoy reading science fiction literature, practicing the violin and electric 
        bass in my free time, and I am a player on my university's representative beach volleyball team.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InfoDialog;
