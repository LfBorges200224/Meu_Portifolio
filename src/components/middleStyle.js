import styled from "styled-components";

export const MiddleMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 652px;
    background-color: #121214;
    border-bottom: 8px #F8F9FA;
    flex-direction: row;
`  

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 607px;
    height: 497px;
    gap: 22px;
`

export const HeadLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 288px;
    height: 58px;
    img{
        width: 48px;
        height: 48px;
        border-radius: 150px;
    }
`

export const ContainerButtonGithub = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 224px;
    height: 48px;
`

export const ButtonMyGithub = styled.a`
    display: flex;
    width: 140px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 8px;
    border: var(--color-primary);
    color: #FFF;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
` 