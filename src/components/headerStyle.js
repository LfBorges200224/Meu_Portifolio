import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
    padding: 0 1rem;
`
export const HeaderContainerContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1039px;
    position: relative;
    >.ButtonOpen{
        display: none;
        width: 46px;
        height: 46px;
        background-color: var(--grey-4);
        border: 1px solid var(--grey-4);
        border-radius: 4px;
    }
    @media(max-width: 668px){
        >.ButtonOpen{
            display: block;
        }
        >.close{
            display: none;
        } 
        >.open{
            position: absolute;
            flex-direction: column;
            align-items: flex-start;
            right: 0;
            top: 100%;
            background-color: black;
            width: 200px;
        }
    }
`

export const ButtonConteiner = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: row;
    transition: all 1.1s;
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