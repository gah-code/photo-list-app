import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset some default styles */
  ${
    '' /* body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
  } */
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
  font-size: 2.4rem;
  font-family: sans-serif;
  color: #5a3e2b;
  font-family: 'Quicksand';
  font-weight: 500;
}

.app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

  /* Add any other global styles you need */

  @media (max-width: 59em) {
  .app{
      grid-template-rows: auto 70vh 1fr auto;
  }
}

`;

export default GlobalStyles;
