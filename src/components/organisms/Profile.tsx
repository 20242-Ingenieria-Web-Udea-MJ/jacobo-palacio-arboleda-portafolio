import React from 'react';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';

interface User {
  photo: string;
  name: string;
  description: string;
}

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="text-center">
      <Avatar src={user.photo} alt={user.name} />
      <h1 className="text-3xl mt-4">{user.name}</h1>
      <p className="text-gray-600">{user.description}</p>
      <Button label="Hire Me" onClick={() => alert('Contact me!')} />
    </div>
  );
};

export default Profile;
