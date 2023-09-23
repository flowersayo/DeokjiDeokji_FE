import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LoginHandler from './pages/LoginHandler';

const MainRouter = () => {
  return (
    <Router>
      {/*헤더*/}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/api/v1/oauth2/kakao" element={<LoginHandler />} />
      </Routes>
      {/*푸터*/}
    </Router>
  );
};

export default MainRouter;
