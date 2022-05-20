import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    padding: 5px 18px;
    margin: 0 5px;
    text-align: center;
    background: transparent;
    border-radius: 25px;
    border: 0;
    outline: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 1200px;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`;