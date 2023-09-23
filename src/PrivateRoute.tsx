import React from 'react';
import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { user } from 'utils/atom';
import { getToken } from 'utils/axios';
import { getUser } from 'api/users';

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

const PrivateRoute = ({ children, authentication }: PrivateRouteProps) => {
  const [userState, setUserState] = useRecoilState(user);

  // 로그인을 하지 말아야 하는 경우
  if (authentication === false) {
    if (getToken()) return <Navigate to="/home" replace />;
    else return <Outlet />;
  }
  if (getToken()) {
    if (userState === null) {
      getUser()
        .then((res) => {
          const { name, email, birthday } = res;
          setUserState({ name, email, birthday });
        })
        .catch(() => {
          // alert('로그인이 필요한 페이지입니다.');
          return <Navigate to="/login" replace />;
        });
    }
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
