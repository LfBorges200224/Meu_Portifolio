import styled from "styled-components";
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import linktrans from "../assets/linktrans.png"
import instatrans from "../assets/instatrans.png"
import facetrans from "../assets/facetrans.png"

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 170px;
    padding: 0 1rem;
    @media(max-width: 668px){
        display: flex;
        justify-content: center;
        width: fit-content;
        height: 438px;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`
export const ContainerPhoto = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 522px;
    height: 69px;
    gap: 16px;
    img{
        width: 69px;
        height: 69px;
        border-radius: 150px;
    }
    @media(max-width: 668px){
        display: flex;
        width: 303px;
        height: 188px;
        flex-direction: column;
    }
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 410.5px;
    height: 79px;
    @media(max-width: 668px){
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 303px;
        height: 188px;
        flex-direction: column;
    }
`
export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    max-width: 176px;
    height: 50px;
`

export const Linktag = styled.a`
    text-decoration: none;
`

export const ContainerLinkDiv = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 150px;
    background-image: url(${linkedin});
    background-repeat: no-repeat;
    &:hover{
        background-image: url(${linktrans});
        transition: 0.5s;
    }
`

export const ContainerInstaDiv = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 150px;
    background-image: url(${instagram});
    background-repeat: no-repeat;
    &:hover{
        background-image: url(${instatrans});
        transition: 0.5s;
    }
`

export const ContainerFaceDiv = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 150px;
    background-image: url(${facebook});
    background-repeat: no-repeat;
    &:hover{
        background-image: url(${facetrans});
        transition: 0.5s;
    }
`