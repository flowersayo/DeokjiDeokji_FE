import React, { useState, useRef } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import { Title } from 'styles/font';

const BottomSheet = ({
  children,
  isOpen,
  setOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={[600, 400, 100, 0]}
      initialSnap={1}
      onSnap={(snapIndex) =>
        console.log('> Current snap point index:', snapIndex)
      }
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
