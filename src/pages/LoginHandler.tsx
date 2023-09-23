import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setToken } from 'src/utils/axios';
import { auth, kakaoAuth } from 'src/api/auth';

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
    kakaoAuth(code)
      .then((res) => {
        setToken(res.data.access_token); // kakao access token
        auth()
          .then((res) => {
            setToken(res.data.data); // new access token
            navigate('/home', { replace: true });
          })
          .catch(() => {
            // 로그인 불가. 에러 페이지로 이동
            alert('로그인에 실패했습니다.');
            navigate('/', { replace: true });
          });
      })
      .catch(() => {
        // 로그인 불가. 에러 페이지로 이동
        alert('로그인에 실패했습니다.');
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
