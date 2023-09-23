import React from 'react';
import { Title, Body2_1 } from 'src/styles/font';
import { AUTH_URL } from 'src/utils/constants';

const LoginPage = () => {
  const clickLoginButton = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <div>
      <Title>덕지와 함께</Title>
      <Title>덕지순례 가실래요?</Title>
      <Body2_1>먼저 로그인이 필요해요 :)</Body2_1>
      <button onClick={clickLoginButton}>카카오 로그인</button>
    </div>
  );
};

export default LoginPage;
