import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
`
export const HeaderContainerContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1039px; 
`

export const ButtonConteiner = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: row;

`

export const HeaderButtons = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 123px;
    height: 22px;
    background-color: transparent;
    border: none;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: bold;
    color: var(--grey-1);
    text-decoration: none;
    cursor: pointer;
`