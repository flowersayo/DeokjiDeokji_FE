import React from 'react';
import styled from 'styled-components';
import { Body1_1, Body2_3 } from 'styles/font';
import { IPlace } from 'utils/interface';
import { Hashtag } from './Hashtag';
import { MemberHashtag } from './MemberHashtag';

export const LocationInfo = ({ focused }: { focused: IPlace | null }) => {
  return (
    <LocationInfoContainer>
      <LocationInfoTop>
        <Body1_1>{focused?.name}</Body1_1>
        <Body2_3>{focused?.address}</Body2_3>
      </LocationInfoTop>
      <HashtagWrap>
        <MemberHashtag group={'BTS'} name={'정국'} />
        <Hashtag category={`${focused?.category}`} />
      </HashtagWrap>
    </LocationInfoContainer>
  );
};

const LocationInfoContainer = styled.div`
  width: 90%;
  height: 120px;
  margin: 0 40px 0 20px;
  border-radius: 12px;
  background-color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 120px;
  z-index: 4;
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
`;
