import React from 'react';
import { styled } from 'styled-components';
const CreateRecordBtn = ({ onClick }: { onClick: any }) => {
  return <Circle onClick={onClick}>+</Circle>;
};

const Circle = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */

  width: 59px;
  height: 59px;
  border-radius: 50%; /* 동그라미 모양을 위한 속성 */
  background-color: white;
  color: black; /* 글자색 설정 */
  font-size: 30px;
  border: none; /* 테두리 제거 */
  cursor: pointer;
  z-index: 2;

  /* 버튼에 호버 효과 추가 */
  &:hover {
    background-color: #c3c3c3;
  }

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
export default CreateRecordBtn;
