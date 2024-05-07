import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'atkinson-hl';
    src: url('../fonts/atkinsonhyperlegible.woff2') format('woff2'),
         url('../fonts/atkinsonhyperlegible.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  :root {
    font-family: 'atkinson-hl';
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text.primary(theme.colors.on.background)};
  }
`;
