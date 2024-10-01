import React from 'react';

interface KnowMoreButtonProps {
  onClick: () => void;
}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-primary text-white py-2 px-6 rounded-full"
    >
      Know More About Me
    </button>
  );
};

export default KnowMoreButton;
