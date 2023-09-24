import React from 'react';
import './App.css';
import { useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import MainRouter from './MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <main>
      <GlobalStyle />
      <Router>
        <MainRouter />
      </Router>
    </main>
  );
}

export default App;
