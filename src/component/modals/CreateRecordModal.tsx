import React from 'react';
import { styled } from 'styled-components';
import BottomSheet from 'component/BottomSheet';

const CreateRecordModal = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen}>
      <ModalContent></ModalContent>
    </BottomSheet>
  );
};

const ModalContent = styled.div`
  width: 100%;
`;

export default CreateRecordModal;
