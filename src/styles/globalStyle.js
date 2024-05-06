import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'atkinson-hl';
    src: url('atkinsonhyperlegible.woff2') format('woff2'),
         url('atkinsonhyperlegible.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  :root {
    font-family: 'atkinson-hl';
  }
`;
