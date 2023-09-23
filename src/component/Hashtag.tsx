import React from 'react';
import styled from 'styled-components';
import { Body2_3 } from 'styles/font';
import { theme } from 'styles/theme';

interface IHashtag {
  category: string;
}

interface hashtags {
  [key: string]: any;
}

const HashtagColors: hashtags = {
  restaurant: theme.colors.purple,
  coffee: theme.colors.green,
  birthday: theme.colors.blue,
};

const HashtagTexts: hashtags = {
  restaurant: '맛집',
  coffee: '카페',
  birthday: '생일 카페',
};

export const Hashtag = ({ category }: IHashtag) => {
  return (
    <HashtagContainer color={`${HashtagColors[category]}`}>
      <Body2_3>#{`${HashtagTexts[category]}`}</Body2_3>
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
