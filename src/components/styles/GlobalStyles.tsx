import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body {
        input, button {
            border: none;
            outline: none;
        }
    }
`;
