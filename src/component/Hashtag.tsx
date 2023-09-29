import React from 'react';
import styled, { css } from 'styled-components';
import { Body2_3 } from 'styles/font';
import { theme } from 'styles/theme';

import { useTheme } from 'styled-components';
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

export const Hashtag = ({ type, disabled, onClick }: any) => {
  const theme = useTheme();
  return (
    <HashtagContainer
      color={`${HashtagColors[type]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Body2_3 color={disabled ? theme.colors.gray02 : theme.colors.black}>
        #{`${HashtagTexts[type]}`}
      </Body2_3>
    </HashtagContainer>
  );
};

const HashtagContainer = styled.div<{ disabled: boolean }>`
  padding: 5px 15px 5px 10px;
  height: 30px;
  border-radius: 100px;
  background-color: ${({ color }) => (color ? color : '')};
  border: 1px solid var(--mono-black, #171717);

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: pointer;
      border-radius: 100px;
      border: 1px solid var(--mono-gray-02, #dcdcdc);
      background: var(--mono-gray-01, #f4f4f4);
    `}
`;
