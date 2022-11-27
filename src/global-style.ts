import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Montserrat-Med';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/Montserrat-Medium.ttf');
   }
   @font-face {
    font-family: 'Montserrat-Reg';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/Montserrat-Regular.ttf');
  }
  @font-face {
    font-family: 'Montserrat-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/Montserrat-SemiBold.ttf');
  }
  body{
    background-color:#F0F0F0;
  }
  *{
    margin:0;
    padding:0;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height:8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #F99746;
    border-radius:20px;
  }
`;

export default GlobalStyle;
