import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  div {
    box-sizing: border-box;
  }
  button {
    padding: 0;
    background: none;
    border: none;
    /* background: none; */
    &:hover {
      cursor: pointer;
    }
    
  }
  `;
