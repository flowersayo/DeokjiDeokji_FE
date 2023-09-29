import React from 'react';
import { styled } from 'styled-components';
import { CustomFont } from 'styles/font';
import { theme } from 'styles/theme';

interface BoxProps {
  type?: number;
}

const MainBtn = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type: number;
  onClick?: any;
}) => {
  return (
    <Box type={type} onClick={onClick}>
      <CustomFont size="1.4rem">{text}</CustomFont>
    </Box>
  );
};

const Box = styled.div<BoxProps>`
  display: flex;
  width: 100%;
  height: 49px;
  // padding: 16px 46px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  border: 1.5px solid var(--mono-black, #171717);
  border-color: ${({ theme }) => theme.colors.gray01};
  background-color: ${({ theme }) => theme.colors.gray01};

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
export default MainBtn;
