import React from 'react';
import styled from 'styled-components';
import { Body2_3 } from 'styles/font';
import { theme } from 'styles/theme';

interface IHashtag {
  type: string;
}

interface hashtags {
  [key: string]: any;
}

const HashtagColors: hashtags = {
  Restaurant: theme.colors.purple,
  Cafe: theme.colors.green,
  BirthCafe: theme.colors.blue,
};

const HashtagTexts: hashtags = {
  Restaurant: '맛집',
  Cafe: '카페',
  BirthCafe: '생일 카페',
};

export const Hashtag = ({ type }: any) => {
  return (
    <HashtagContainer color={`${HashtagColors[type]}`}>
      <Body2_3>#{`${HashtagTexts[type]}`}</Body2_3>
    </HashtagContainer>
  );
};

const HashtagContainer = styled.div`
  margin-top: 60px;
  padding: 5px 15px 5px 10px;
  height: 30px;
  border-radius: 100px;
  background-color: ${({ color }) => (color ? color : '')};
`;
