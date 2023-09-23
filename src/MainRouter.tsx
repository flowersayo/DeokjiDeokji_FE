import React from 'react';
import { styled } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeedPage from 'pages/FeedPage';
import CollectBookPage from 'pages/CollectBookPage';
import BottomTabBar from 'component/BottomTabBar';
import LoginPage from 'pages/LoginPage';
import LoginHandler from 'pages/LoginHandler';
import PrivateRoute from 'PrivateRoute';
import { useLocation } from 'react-router-dom';

const MainRouter = () => {
  const location = useLocation();
  return (
    <Container>
      {/*헤더*/}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/api/v1/oauth2/kakao" element={<LoginHandler />} />
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/collect" element={<CollectBookPage />} />
        </Route>
      </Routes>
      {location.pathname === '/' || <BottomTabBar />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  margin: auto;
`;

export default MainRouter;
