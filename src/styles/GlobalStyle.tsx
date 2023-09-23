import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('./assets/fonts/PretendardVariable.woff2') format('woff2'),
          url('./assets/fonts/PretendardVariable.tff') format('truetype');
    font-weight: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }
  
  body {
    font-family: 'Pretendard', sans-serif;
    background-color: white;
  }
`;

export default GlobalStyle;
