import CollectbookUser from 'component/CollectBook/CollectbookUser';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const CollectBookPage = () => {
  const [mode, setMode] = useState<'HISTORY' | 'FUTURE'>('HISTORY');
  return (
    <CollectBookPageLayout>
      <CollectbookUser />
      <ToggleWrapper>
        <ToggleBtn
          onClick={() => {
            setMode('HISTORY');
          }}
          $active={mode === 'HISTORY'}
        >
          기록 보관함
        </ToggleBtn>
        <ToggleBtn
          onClick={() => {
            setMode('FUTURE');
          }}
          $active={mode === 'FUTURE'}
        >
          예정 보관함
        </ToggleBtn>
      </ToggleWrapper>
      {/* TODO: 콜렉트북 그리드 */}
    </CollectBookPageLayout>
  );
};

const CollectBookPageLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const ToggleWrapper = styled.div`
  width: 32.7rem;
  height: 4.8rem;
  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.gray01};
  display: flex;
  justify-content: space-between;
`;

const ToggleBtn = styled.button<{ $active: boolean }>`
  width: 15.6rem;
  height: 4rem;
  margin: 0.4rem;
  box-sizing: border-box;
  border-radius: 1.2rem;
  border: ${({ theme, $active }) =>
    $active ? `1.5px solid ${theme.colors.gray03}` : 'none'};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.white : 'none'};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.gray03};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 160%; /* 2.56rem */
  cursor: pointer;
`;

export default CollectBookPage;
