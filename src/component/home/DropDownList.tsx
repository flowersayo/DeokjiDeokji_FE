import React, { useState } from 'react';
import { styled } from 'styled-components';
import DownIconSrc from 'assets/icons/down.svg';
import UpIconSrc from 'assets/icons/up.svg';
import CheckIconSrc from 'assets/icons/check.svg';
import UnCheckIconSrc from 'assets/icons/uncheck.svg';

import { Body1_1 } from 'styles/font';
import { IGroup } from 'utils/interface';

const DropDownList = ({
  selectedMember,
  setSelectedMember,
}: {
  selectedMember: any;
  setSelectedMember: any;
}) => {
  /*
  {group:"BTS"
    name : "진"}
  */

  const groups = [
    {
      name: 'BTS',
      members: ['RM', '진', '슈가', '제이홉', '지민', '뷔', '정국'],
    },
    {
      name: '뉴진스',
      members: ['뉴', '진', '스'],
    },
  ];

  return (
    <List>
      {groups.map((group, idx) => {
        return (
          <DropDown
            key={idx}
            group={group}
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
          />
        );
      })}
    </List>
  );
};
const DropDown = ({
  group,
  selectedMember,
  setSelectedMember,
}: {
  group: IGroup;
  selectedMember: any;
  setSelectedMember: any;
}) => {
  const { name: group_name, members } = group;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Col>
      <Row key={group_name}>
        <Body1_1>{group_name}</Body1_1>
        {isOpen ? (
          <img src={UpIconSrc} onClick={() => setIsOpen(false)} />
        ) : (
          <img src={DownIconSrc} onClick={() => setIsOpen(true)} />
        )}
      </Row>
      {isOpen && (
        <Col>
          {members.map((name) => (
            <Row key={name}>
              <Body1_1>{name}</Body1_1>
              {selectedMember === name ? (
                <img src={CheckIconSrc} />
              ) : (
                <img
                  src={UnCheckIconSrc}
                  onClick={() => {
                    setSelectedMember({
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
