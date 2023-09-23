import React from 'react';
import { Title, Body2_1 } from 'src/styles/font';
import { AUTH_URL } from 'src/utils/constants';
import kakaoLoginButtonImg from 'src/assets/buttons/kakao_login_medium_wide.png';

const LoginPage = () => {
  const clickLoginButton = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <div>
      <Title>덕지와 함께</Title>
      <Title>덕지순례 가실래요?</Title>
      <Body2_1>먼저 로그인이 필요해요 :)</Body2_1>
      <button onClick={clickLoginButton}>
        <img src={kakaoLoginButtonImg} alt="카카오 로그인 버튼" />
      </button>
    </div>
  );
};

export default LoginPage;
