import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    max-width: 100vw;
    min-height: 100vh;
    font-family: IBM Plex Sans;
    background: var(--grey-0);
}

html{
    scroll-behavior: smooth;
    scroll-padding: 0.1rem;
}

:root{
    --color-primary: #623CEA;
    --color-primary-50: #311E75;
    --color-secondary: #50CF9A;
    --color-secondary-50: #E5F8F0;
    --color-tertiary: #FF577F;
    --color-tertiary-50: #311E75;
    --color-quaternary: #506CCF;
    --color-quaternary-50: #E5E9F8;
    --grey-0: black;
    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #868E96;
    --grey-4: #212529;
    --social-media-instagram: #CF50AC;
    --social-media-facebook: #506CCF;
    --social-media-linkedin: #0E76A8;
}
`
