import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CLIENT_ID, REDIRECT_URI } from 'src/utils/constants';
import { setToken } from 'src/utils/axios';

const LoginHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    if (!code) {
      // 인가 코드가 없음
      // 로그인 페이지로 이동
      navigate('/', { replace: true });
      return;
    }
    // 인증 시도
    const loginRequest = {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
    };
    axios
      .post('https://kauth.kakao.com/oauth/token', loginRequest, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        const accessToken = response.data.access_token;
        setToken(accessToken);
        navigate('/home', { replace: true });
      })
      .catch(() => {
        // TODO : 로그인에 실패했습니다. (어떤 형태로든 알림)
        navigate('/', { replace: true });
      });
  }, []);

  return (
    <div>
      {/* 로그인 대기 스피너 */}
      LOADING . . .
    </div>
  );
};

export default LoginHandler;
