import axios from 'axios';
import { GET } from 'src/utils/axios';
import { CLIENT_ID, REDIRECT_URI } from 'src/utils/constants';

// access token을 받아오는 api
export const auth = () => {
  return GET('/api/v1/oauth2/kakao');
};

// kakaoAuth access token을 받아오는 api
export const kakaoAuth = (code: string) => {
  const kakaoAuthReq = {
    grant_type: 'authorization_code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    code: code,
  };
  return axios.post('https://kauth.kakao.com/oauth/token', kakaoAuthReq, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
