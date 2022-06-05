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
`;
