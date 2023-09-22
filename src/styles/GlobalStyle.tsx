import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  
  body {
    font-family:  sans-serif; // TODO 폰트 바꾸기
    background-color: white;
    
  }
`;

export default GlobalStyle;
