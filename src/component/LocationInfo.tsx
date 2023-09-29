import React from 'react';
import styled, { css } from 'styled-components';
import { Body1_1, Body2_3 } from 'styles/font';
import { IPlace, IRecord } from 'utils/interface';
import { Hashtag } from './Hashtag';
import { MemberHashtag } from './MemberHashtag';

export const LocationInfo = ({
  focused,
  shadow = false,
}: {
  focused: IRecord | null;
  shadow?: boolean;
}) => {
  return (
    <LocationInfoContainer shadow={shadow}>
      <Col>
        <Row>
          <img
            src={focused?.place.img}
            style={{ width: '46px', height: '46px', borderRadius: '10px' }}
          />
          <LocationInfoTop>
            <Body1_1>{focused?.place.name}</Body1_1>
            <Body2_3>{focused?.place.address}</Body2_3>
          </LocationInfoTop>
        </Row>
        <Row>
          <MemberHashtag group={focused?.group} name={focused?.member} />
          <Hashtag type={focused?.place.type} />
        </Row>
      </Col>
    </LocationInfoContainer>
  );
};

const LocationInfoContainer = styled.div<{ shadow: boolean }>`
  z-index: 3;
  background-color: white;
  width: 100%;
  height: 120px;
  padding: 12px;
  justify-content: space-between;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 3px 3px 3px 3px ${({ theme }) => theme.colors.gray02};
    `}
`;

const Col = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;
const LocationInfoTop = styled.div`
  height: 50px;

  display: flex;
  flex-direction: column;
`;
