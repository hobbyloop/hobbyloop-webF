import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}   
  button {
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
