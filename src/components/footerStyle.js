import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 170px;
`
export const ContainerPhoto = styled.div`
    display: flex;
    align-items: center;
    width: 522px;
    height: 69px;
    gap: 16px;
    img{
        width: 69px;
        height: 69px;
        border-radius: 150px;
    }
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 410.5px;
    height: 79px;
`
export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 176px;
    height: 50px;
`

export const Linktag = styled.a`
    text-decoration: none;
`