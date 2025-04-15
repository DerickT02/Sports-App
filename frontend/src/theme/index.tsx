// src/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${({ theme }) => theme.fontFamily};
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;
