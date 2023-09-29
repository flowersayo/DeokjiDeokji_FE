import React, { useState } from 'react';
import { styled } from 'styled-components';
import DownIconSrc from 'assets/icons/down.svg';
import UpIconSrc from 'assets/icons/up.svg';
import CheckIconSrc from 'assets/icons/check.svg';
import UnCheckIconSrc from 'assets/icons/uncheck.svg';

import { Body1_1 } from 'styles/font';
import { IGroup } from 'utils/interface';

const DropDownList = ({
  selected,
  setSelected,
}: {
  selected: any;
  setSelected: any;
}) => {
  /*
  {group:"BTS"
    member : "진"}
  */

  const groups = [
    {
      group_name: 'BTS',
      group_members: ['RM', '진', '슈가', '제이홉', '지민', '뷔', '정국'],
    },
    {
      group_name: '뉴진스',
      group_members: ['해린', '민지', '다니엘', '하니'],
    },
    {
      group_name: '블랙핑크',
      group_members: ['제니', '리사', '지수', '로제'],
    },
    {
      group_name: '세븐틴',
      group_members: [
        '민규',
        '정한',
        '원우',
        '준',
        '조슈아',
        '에스쿱스',
        '호시',
        '도겸',
        '우지',
        '승관',
      ],
    },
  ];

  const initialOpenState = new Array(groups.length).fill(false);

  const [currentOpenTab, setCurrentOpenTab] = useState<number | null>(null);

  return (
    <List>
      {groups.map((groupInfo, idx) => {
        return (
          <DropDown
            key={idx}
            idx={idx}
            groupInfo={groupInfo}
            setSelected={setSelected}
            selected={selected}
            currentOpenTab={currentOpenTab}
            setCurrentOpenTab={setCurrentOpenTab}
          />
        );
      })}
    </List>
  );
};

const DropDown = ({
  idx,
  groupInfo,
  selected,
  setSelected,
  currentOpenTab,
  setCurrentOpenTab,
}: {
  idx: number;
  groupInfo: IGroup;
  selected: any;
  setSelected: any;
  currentOpenTab: number | null;
  setCurrentOpenTab: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const { group, member } = selected;
  const { group_name, group_members } = groupInfo;

  const isOpen = idx == currentOpenTab;

  console.log(isOpen);
  return (
    <Col>
      <Row key={group_name}>
        {isOpen ? (
          <Body1_1>{group_name}</Body1_1>
        ) : (
          <Body1_1 color="#DCDCDC"> {group_name}</Body1_1>
        )}

        {isOpen ? (
          <img
            src={UpIconSrc}
            onClick={() => {
              if (isOpen) {
                setCurrentOpenTab(null);
                //setIsOpen(false);
              }
            }}
          />
        ) : (
          <img
            src={DownIconSrc}
            onClick={() => {
              setCurrentOpenTab(idx); // 새로운 탭 열기
              setSelected({ group: '', member: '' });

              //setIsOpen(true);
            }}
          />
        )}
      </Row>
      {isOpen && (
        <Col>
          {group_members.map((name: any) => (
            <Row key={name}>
              <Body1_1>{name}</Body1_1>

              {member === name ? (
                <img src={CheckIconSrc} />
              ) : (
                <img
                  src={UnCheckIconSrc}
                  onClick={() => {
                    setSelected({
                      group: group_name,
                      member: name,
                    });
                  }}
                />
              )}
            </Row>
          ))}
        </Col>
      )}
    </Col>
  );
};
const List = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  gap: 10px;
`;

export default DropDownList;
