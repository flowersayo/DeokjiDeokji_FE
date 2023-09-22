import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
const MainRouter = () => {
  return (
    <Router>
      {/*헤더*/}
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      {/*푸터*/}
    </Router>
  );
};

export default MainRouter;
