import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Body2_2 } from 'styles/font';
import DuckjiHeadSrc from 'assets/images/duckji-head.svg';
const ToastMessage = ({
  text,
  setIsVisible,
  isVisible,
}: {
  text: string;
  isVisible: boolean;
  setIsVisible: any;
}) => {
  useEffect(() => {
    // 3초 후에 isVisible 상태를 false로 변경하여 컴포넌트를 숨깁니다.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머를 클리어합니다.
    return () => clearTimeout(timer);
  }, []);

  return (
    <MessageBox>
      <Img src={DuckjiHeadSrc} />
      <Body2_2>{text}</Body2_2>
    </MessageBox>
  );
};

const MessageBox = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;

  z-index: 10;
  transform: translate(-50%, -50%);
  align-self: center;
  display: flex;
  flex-direction: row;
  display: inline-flex;
  padding: 20px 22px;
  align-items: center;
  gap: 5px;
  white-space: nowrap;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.2);

  animation: slideIn 1s ease;

  @keyframes slideIn {
    0% {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;
export default ToastMessage;
