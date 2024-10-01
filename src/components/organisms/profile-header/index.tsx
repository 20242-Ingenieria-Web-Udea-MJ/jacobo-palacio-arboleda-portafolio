import React, { useState } from 'react';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';
import KnowMoreButton from '@/components/atoms/know-more-button';
import InfoDialog from '@/components/atoms/info-dialog';

const ProfileHeader: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="text-center py-12 bg-gray-100">
      <div className="container mx-auto">
        <Heading level={1} className="text-6xl font-bold mt-4">
          I&apos;m Jacobo Palacio
          <span className="text-primary"> Junior Android Developer</span>
        </Heading>
        <Text className="text-3xl text-center mt-2 text-gray-500">
            I am currently seeking internships or employment as an Android developer.
        </Text>
        <KnowMoreButton onClick={handleOpenDialog} />
      </div>
      <InfoDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </section>
  );
};

export default ProfileHeader;
