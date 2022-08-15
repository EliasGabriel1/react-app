import {createGlobalStyle} from "styled-components";

const Base  = createGlobalStyle`
    :root{
        --font-project: 'Montserrat', sans-serif;
        --color-bg-home: #0d1117;
        --color-letter-Home: #FFFFFF;
        --bg-box-form-home: #FFFFFF20;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-project);
    }

    body{
        background-color:#fff;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: transparent;
        border: none;
    }

    input:focus-visible {
        outline-offset: unset;
    }

    :focus-visible {
        outline: none;
    }
`;

export default Base;