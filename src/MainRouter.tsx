import React from 'react';
import { styled } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeedPage from 'pages/FeedPage';
import CollectBookPage from 'pages/CollectBookPage';
import BottomTabBar from 'component/BottomTabBar';
const MainRouter = () => {
  return (
    <Container>
      <Router>
        {/*헤더*/}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/collect" element={<CollectBookPage />} />
        </Routes>

        <BottomTabBar />
      </Router>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 495px; // 모바일 최대
  justify-content: center;
  margin: auto;
`;

export default MainRouter;
