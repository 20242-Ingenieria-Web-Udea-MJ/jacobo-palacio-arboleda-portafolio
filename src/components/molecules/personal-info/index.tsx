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
        <Text className='text-sm'>Phone number: {phoneNumber}</Text>
        <Text className='text-sm'>Mail: {mail}</Text>
        <Text className='text-sm'>Location: {location}</Text>
        <Text className='text-sm'>Freelance: <span className="text-green-500">{freelance ? 'Available' : 'Unavailable'}</span></Text>
    </div>
  );
};

export default PersonalInfo;
