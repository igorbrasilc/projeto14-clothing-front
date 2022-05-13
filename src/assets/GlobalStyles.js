import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  transition: 300ms;
  --color-theme: #FF233D;
  --font: 'Roboto', sans-serif;
}

body {
  background-color: #FAFAFA;
}
`;

export default GlobalStyle;
