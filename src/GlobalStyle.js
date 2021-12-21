import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&family=Pacifico&display=swap');
*,*::before,*::after{
    box-sizing:border-box;
} 
:root{
     --maxWidth: 1280px;
     --textWhite : white;
     --paddingTop: 10px;
     --primary-bg: #020916;
     --secondary-bg: #151f2e;
     --font-family-moo: 'Moo Lah Lah';
     --font-family-pacifico: 'Pacifico';
 }
 
 body{
    margin: 0;
    color: var(--textWhite);
    font-family: sans-serif;
    font-size: 18px;
    background-color: var(--primary-bg)
 }
 `;
