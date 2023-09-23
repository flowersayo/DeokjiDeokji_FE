import styled from 'styled-components';
import { Body1_1, Body2_3 } from 'styles/font';
import { DataType } from 'utils/interface';

export const CollectLayout = styled.div<{ tag: DataType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  height: fit-content;
  padding: 1.6rem;
  border-radius: 2rem;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ tag }) => {
    switch (tag) {
      case 'RESTAURANT':
        return ({ theme }) => theme.colors.purple;
      case 'CAFE':
        return ({ theme }) => theme.colors.green;
      default:
        // BIRTHDAY_CAFE
        return ({ theme }) => theme.colors.blue;
    }
  }};
`;

export const CollectName = styled(Body1_1)`
  word-break: keep-all;
`;

export const CollectArtist = styled(Body2_3)`
  display: flex;
  padding: 0.6rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
