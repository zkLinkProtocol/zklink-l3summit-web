import { createGlobalStyle, css } from "styled-components";

const GlobalStyle: any = createGlobalStyle(
  (props) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "SpaceGrotesk", system-ui, -apple-system, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Manrope";
      background: #fff;
    }

    html,
    body,
    #root {
      min-height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      //background: rgba(17, 85, 70, 1);
      background-color: rgba(56, 68, 90, 1);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
  `
);

export default GlobalStyle;
