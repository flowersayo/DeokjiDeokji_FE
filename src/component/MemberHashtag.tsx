import React from 'react';
import styled from 'styled-components';
import { Body2_3 } from 'styles/font';
import { theme } from 'styles/theme';
import { IPeoples } from 'utils/interface';

export const MemberHashtag = ({ group, name }: IPeoples) => {
  return (
    <HashtagContainer>
      <Body2_3 color={`${theme.colors.white}`}>
        #{group}_{name}
      </Body2_3>
    </HashtagContainer>
  );
};

const HashtagContainer = styled.div`
  margin-top: 60px;
  margin-right: 10px;
  padding: 5px 15px 5px 10px;
  height: 30px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.black};
`;
