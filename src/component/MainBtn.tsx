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
      <CustomFont size="14px">{text}</CustomFont>
    </Box>
  );
};

const Box = styled.div<BoxProps>`
  display: flex;
  width: 100%;
  height: 49px;
  padding: 16px 46px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border: 1.5px solid var(--mono-black, #171717);
  border-color: ${({ type }) =>
    type ? theme.colors.black : theme.colors.gray01};
  background: ${({ type }) =>
    type ? theme.colors.green : theme.colors.gray01};
`;
export default MainBtn;
