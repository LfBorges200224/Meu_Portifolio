import styled from "styled-components";

export const ContainerMainContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 939px;
    background-color: var(--grey-4);
    padding: 0 1rem;
`

export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1021px;
    min-height: 490px;
    justify-content: space-between;
    @media(max-width: 668px){
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

export const ContainerTextTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 415px;
    min-height: 201px;
    gap: 20px;
    >h1>span{
        color: var(--color-primary);
    }
`

export const ContainerMyContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 439px;
    min-height: 487px;
    gap: 68px;
` 

export const ContainerFormContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 439px;
    min-height: 117px;
    img{
        width: 72px;
        height: 72px;
    }
`
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 339px;
    min-height: 117px;
    gap: 20px;
    a{
        text-decoration: none;
        color: var(--grey-1);
    }
`