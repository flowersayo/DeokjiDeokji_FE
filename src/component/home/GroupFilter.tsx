import React from 'react';
import { styled } from 'styled-components';

const GroupFilter = ({
  selectedGroup,
  setSelectedGroup,
}: {
  selectedGroup: 'BTS' | '뉴진스' | '블랙핑크' | '세븐틴' | null;
  setSelectedGroup: React.Dispatch<
    React.SetStateAction<'BTS' | '뉴진스' | '블랙핑크' | '세븐틴' | null>
  >;
}) => {
  return (
    <GroupFilterWrapper>
      <GroupFilterBtn
        $selected={selectedGroup === 'BTS'}
        onClick={() => setSelectedGroup('BTS')}
      >
        BTS
      </GroupFilterBtn>
      <GroupFilterBtn
        $selected={selectedGroup === '뉴진스'}
        onClick={() => setSelectedGroup('뉴진스')}
      >
        뉴진스
      </GroupFilterBtn>
      <GroupFilterBtn
        $selected={selectedGroup === '블랙핑크'}
        onClick={() => setSelectedGroup('블랙핑크')}
      >
        블랙핑크
      </GroupFilterBtn>
      <GroupFilterBtn
        $selected={selectedGroup === '세븐틴'}
        onClick={() => setSelectedGroup('세븐틴')}
      >
        세븐틴
      </GroupFilterBtn>
    </GroupFilterWrapper>
  );
};

const GroupFilterWrapper = styled.div`
  display: flex;
  gap: 1.15rem;
  display: flex;
  position: absolute;
  top: 10px;
  z-index: 2;
  margin: 0 2.76rem;
  margin-top: 1.5rem;
`;

const GroupFilterBtn = styled.button<{ $selected: boolean }>`
  display: flex;
  padding: 0.6912rem 1.8432rem;
  justify-content: center;
  align-items: center;
  gap: 0.4608rem;
  border-radius: 1.3824rem;
  border: 1.152px solid #171717;
  background: ${({ $selected }) => ($selected ? '#74FAB9' : '#FFFFFF')};
  box-shadow: 0px 0px 11.52px 0px rgba(0, 0, 0, 0.1);
  font-size: calc(10px + 1vw);
`;
export default GroupFilter;
