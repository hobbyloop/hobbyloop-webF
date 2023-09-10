import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* Other global styles go here */
`;
function App() {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
}

export default App;
