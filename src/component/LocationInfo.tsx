import React from 'react';
import styled, { css } from 'styled-components';
import { Body1_1, Body2_3 } from 'styles/font';
import { IPlace, IRecord } from 'utils/interface';
import { Hashtag } from './Hashtag';
import { MemberHashtag } from './MemberHashtag';

interface IPositions {
  position: string;
}

export const LocationInfo = ({
  focused,
  position,
}: {
  focused: IRecord | null;
  position: string;
}) => {
  return (
    <LocationInfoContainer position={position}>
      <div style={{ position: 'absolute', left: 20, top: 15 }}>
        <img
          src={focused?.place.img}
          style={{ width: '60px', height: '60px', borderRadius: '10px' }}
        />
      </div>
      <LocationInfoTop>
        <Body1_1>{focused?.place.name}</Body1_1>
        <Body2_3>{focused?.place.address}</Body2_3>
      </LocationInfoTop>
      <HashtagWrap>
        <MemberHashtag group={focused?.group} name={focused?.member} />
        <Hashtag type={focused?.place.type} />
      </HashtagWrap>
    </LocationInfoContainer>
  );
};

const LocationInfoContainer = styled.div<IPositions>`
  width: 90%;
  height: 120px;

  border-radius: 12px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.position === 'relative'
      ? css`
          position: relative;
          /* z-index: 2; */
        `
      : css`
          position: absolute;
          bottom: 120px;
          z-index: 4;
          margin: 0 40px 0 20px;
        `}
  box-shadow: 3px 3px 3px 3px ${({ theme }) => theme.colors.gray02};
`;

const LocationInfoTop = styled.div`
  width: 70%;
  height: 50px;

  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
`;

const HashtagWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  padding-right: 55px;
`;
