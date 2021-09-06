import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-50: #f8f8f8;
    --gray-100: #D7D7D7;
    --gray-200: #BBBBBB;
    --black-800: #1A1D23;
    --black-900: #16181d;
    --purple-500: #FF57B2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--gray-100);
    background-color: var(--black-800);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--gray-50);
  }

  a {
    text-decoration: none;
  }
`;
