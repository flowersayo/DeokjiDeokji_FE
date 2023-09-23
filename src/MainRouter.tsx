import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
const MainRouter = () => {
  return (
    <Router>
      {/*헤더*/}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      {/*푸터*/}
    </Router>
  );
};

export default MainRouter;
