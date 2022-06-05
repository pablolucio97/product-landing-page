import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        width: 100%;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.background_primary};
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    .title {
    font-size: 48px;
    color: #ffffff;
    width: 640px;
  }

  .subtitle {
    font-size: 18px;
    width: 480px;
    color: #e0dedc;
  }

  .purshase-button{
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.title};
      height: 40px;
      width: 120px;
      margin-top: 12px;
  }

`;
