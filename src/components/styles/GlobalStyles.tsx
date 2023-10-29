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
    &:hover {
      cursor: pointer;
    }    
  }

  input {
    margin: 0;
    padding: 0;
  }
  `;
