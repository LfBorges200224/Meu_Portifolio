import styled from "styled-components";

export const ContainerMainContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 939px;
    background-color: var(--grey-4);
`

export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: row;
    width: 1021px;
    height: 490px;
    justify-content: space-between;
`

export const ContainerTextTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 415px;
    height: 201px;
    gap: 20px;
    >h1>span{
        color: var(--color-primary);
    }
`

export const ContainerMyContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 439px;
    height: 487px;
    gap: 68px;
` 

export const ContainerFormContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 439px;
    height: 117px;
    img{
        width: 72px;
        height: 72px;
    }
`
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 339px;
    height: 117px;
    gap: 10px;
    a{
        text-decoration: none;
        color: var(--grey-1);
    }
`