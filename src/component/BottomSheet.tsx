import React, { useState, useRef, useEffect } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import { Title } from 'styles/font';

const BottomSheet = ({
  children,
  isOpen,
  setOpen,
  step,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  step: number;
}) => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={[750, 532, 385, 375, 368]}
      detent="content-height"
      onSnap={(snapIndex) =>
        console.log('> Current snap point index:', snapIndex)
      }
      style={{ maxWidth: '576px', margin: 'auto' }}
    >
      <Sheet.Container
        style={{
          padding: '12px 24px',
          paddingBottom: '28px',
        }}
      >
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
