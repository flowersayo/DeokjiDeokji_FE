import { styled } from 'styled-components';
import { theme } from './theme';

interface FontProps {
  weight?: number;
  color?: string;
  size?: string;
  inherit?: boolean;
}
export const Title = styled.span<FontProps>`
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  font-size: ${({ size }) => (size ? size : '2rem')}; // 20px
  color: ${({ color }) => (color ? color : theme.colors.black)};
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;

export const CustomFont = styled.span<FontProps>`
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1.2rem')}; // 12px
  color: ${({ color }) => (color ? color : theme.colors.black)};
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

export const Body1_1 = styled.span<FontProps>`
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1.6rem')}; // 16px
  color: ${({ color }) => (color ? color : theme.colors.black)};

  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;

export const Body2_1 = styled.span<FontProps>`
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1.6rem')}; // 16px
  color: ${({ color }) => (color ? color : theme.colors.black)};

  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const Body2_2 = styled.span<FontProps>`
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1.4rem')}; // 14px
  color: ${({ color }) => (color ? color : theme.colors.black)};

  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const Body2_3 = styled.span<FontProps>`
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1.2rem')}; // 14px
  color: ${({ color }) => (color ? color : theme.colors.black)};

  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
