// components/molecules/PersonalInfo.tsx
import React from 'react';
import Text from '@components/atoms/text';

interface PersonalInfoProps {
    phoneNumber: string;
    mail: string;
    location: string;
    freelance: boolean;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ phoneNumber, mail, location, freelance }) => {
  return (
    <div className="space-y-2">
        <Text>Phone number: {phoneNumber}</Text>
        <Text>Mail: {mail}</Text>
        <Text>Location: {location}</Text>
        <Text>Freelance: <span className="text-green-500">{freelance ? 'Available' : 'Unavailable'}</span></Text>
    </div>
  );
};

export default PersonalInfo;
