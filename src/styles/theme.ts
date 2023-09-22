import { DefaultTheme, css } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    //  white: '#ffffff',
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
