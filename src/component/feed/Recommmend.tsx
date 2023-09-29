import React from 'react';
import { styled } from 'styled-components';
import { Body1_1, Body2_1 } from 'styles/font';
import MainBtn from 'component/MainBtn';
const Recommmend = ({ showToast }: { showToast: any }) => {
  const answerNo = () => {};

  const answerYes = () => {
    //토스트 띄우기

    showToast();
  };
  return (
    <Box>
      <Body1_1>세븐틴 생일 카페가 이번주에 열리는데 혼자라도 가볼까요?</Body1_1>

      <Row>
        <MainBtn type={0} text={'다음에 간다'} onClick={answerNo}></MainBtn>
        <MainBtn type={1} text={'당연히 가본다'} onClick={answerYes}></MainBtn>
      </Row>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 24px;
  border-radius: 20px;
  border: 1.5px solid var(--mono-black, #171717);
  background: var(--mono-white, #fff);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default Recommmend;
