import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat',sans-serif;
        font-size: ${({ theme }) => theme.fontSize.m};
        color: ${({ theme }) => theme.colors.accent};
        margin: 0;
    }

    a,button{
        font-family: 'Montserrat',sans-serif;
    }
`;
