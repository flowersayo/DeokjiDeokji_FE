import { DefaultTheme, css } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    black: '#171717',
    gray01: '#F4F4F4',
    gray02: '#DCDCDC',
    gray03: '#848484',
    gray04: '#535359',
    purple: '#E297F9',
    green: '#74FAB9',
    blue: '#8AA4FF',
  },
  fontSize: {
    title: '2rem',
    body11: '1.6rem',
    body21: '1.6rem',
    body22: '1.1rem',
  },
  fontWeight: {
    title: 600,
    body11: 500,
    body21: 400,
    body22: 500,
  },
  lineHeight: {
    title: '150%',
    body11: '160%',
    body21: '150%',
    body22: '150%',
  },
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
