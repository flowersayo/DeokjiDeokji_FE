import React, { useState } from 'react';
import { styled } from 'styled-components';
import BottomSheet from 'component/BottomSheet';

const CreateRecordModal = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} step={currentStep}>
      <ModalContent></ModalContent>
    </BottomSheet>
  );
};

const ModalContent = styled.div`
  width: 100%;
`;

export default CreateRecordModal;
