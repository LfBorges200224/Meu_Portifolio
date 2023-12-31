import styled from "styled-components";
import photo from "../assets/header-bg.png";
import github from "../assets/Bt-Circle-github.png"
import githubBlack from "../assets/githubblack.png"

export const MiddleMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 652px;
    background-color: #121214;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-position: right;
    border-bottom: 8px #F8F9FA;
    flex-direction: row;
    padding: 0 1rem;
    @media(max-width: 668px){
        background-color: #121214;
        background-image: none;
        background-repeat: no-repeat;
        background-position: right;
    }
`  

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1039px;
    height: 497px;
    gap: 40px;
` 

export const MiddleContainerContain = styled.div`
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 607px;
    height: 497.161px;
    gap: 22px;
    >h1>span{
        color: var(--color-primary);
    }
`
export const ContainerPhoto = styled.div`
    display: inline-flex;
    width: 100%;
    max-width: 437px;
    height: 68px;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    @media (max-width: 668px){
        height: 100%;
        width: 100%;
        overflow-x: auto;
        scrollbar-color: transparent;
    }
`

export const HeadLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 288px;
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
export const ContainerGitHubDiv = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 150px;
    background-image: url(${githubBlack});
    background-repeat: no-repeat;
    border: 1px solid var(--grey-3);
    &:hover{
        background-image: url(${github});
        transition: 0.5s;
        border: 1px solid var(--grey-4);
    }
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
    &:hover{
        background-color: var(--color-primary-50);
        transition: 0.5s;
    }
` 