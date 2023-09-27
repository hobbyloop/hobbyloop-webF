import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    html, body {
    padding: 0;
  }
  div, input {
    box-sizing: border-box;
  }
  * {
    padding: 0;
    margin: 0;
  }
`;
