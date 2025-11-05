import { createGlobalStyle } from "styled-components";


export const colors = {
    softCoral: '#E66767',
    softPeach: '#FFEBD9',
    white: '#FFF',
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: ${colors.softCoral}
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
    } 
`