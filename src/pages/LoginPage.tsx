import React from 'react';
import { Title, Body2_1 } from 'styles/font';
import { AUTH_URL } from 'utils/constants';
import styled from 'styled-components';
import { flexColumnCenter } from 'styles/theme';
import kakaoLoginButtonImg from 'assets/buttons/kakao_login_medium_wide.png';
import loginCharacterImg from 'assets/character/login_character.svg';

const LoginPage = () => {
  const clickLoginButton = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <LoginPageLayout>
      <TitleWrapper>
        <Title>
          덕지와 함께 <br />
          덕지순례 가실래요?
        </Title>
      </TitleWrapper>
      <Body2_1>먼저 로그인이 필요해요 :)</Body2_1>
      <KakaoLoginButton onClick={clickLoginButton}>
        <img src={kakaoLoginButtonImg} alt="카카오 로그인 버튼" />
      </KakaoLoginButton>
      <LoginCharacter src={loginCharacterImg} alt="로그인 캐릭터" />
    </LoginPageLayout>
  );
};

const LoginPageLayout = styled.div`
  width: 100%;
  height: 100%;
  ${flexColumnCenter}
`;

const KakaoLoginButton = styled.button`
  border: none;
  background: none;
  width: 30rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 4.8rem;
  text-align: center;
`;

const LoginCharacter = styled.img`
  position: absolute;
  width: 100%;
  width: 21.3343rem;
  height: 28.7199rem;
  right: 0;
  bottom: 0;
  margin-bottom: 4.65rem;
`;

export default LoginPage;
