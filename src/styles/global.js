import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font: 14px Roboto, Arial, sans-serif;

    /* width */
    ::-webkit-scrollbar {
      width: 16px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #ccc;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
  }

  body, input, button {
    color: #a7a7a7;
  }

  h1 {
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
