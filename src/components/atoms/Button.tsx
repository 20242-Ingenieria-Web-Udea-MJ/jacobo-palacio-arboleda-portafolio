import React from 'react'

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className='bg-primary w-40 h-14 text-black font-bold py-2 px-4 rounded inline-flex items-center'
    >
      {label}
      <span className='ml-2'>→</span>
  </button>
  );
}

export default Button;
