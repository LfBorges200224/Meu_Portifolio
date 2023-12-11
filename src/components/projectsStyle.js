import styled from "styled-components";

export const HeadContainerProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 272px;
    height: 75px;
    gap: 10px;
    span{
        color: red;
    }
`

export const ProjectMainContainer = styled.div`
    display: flex;
    padding-top: 60px;
    justify-content: center;
    background-color: #0A0A0B;
    width: 100%;
    min-height: 939px;
    padding: 0 1rem;
`

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1030px;
    min-height: 439px;
    gap: 22px;
`

export const UlcontainerProject = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1030px;
    min-height: 579px;
    padding: 10px;
    gap: 22px;
    flex-wrap: wrap;
`
export const LiContainerProject = styled.li`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 482px;
    min-height: 226px; 
    gap: 26px;
`
export const ContainerLenguageTech = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 307px;
    min-height: 24px;
    gap: 10px;
`
export const LanguageTech = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 24px;
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-weight: normal;
    border-radius: 4px;
    background-color: var(--grey-4);
    color: var(--grey-3);
`

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: row;
    width: 279px;
    height: 28px;
    gap: 15px;
`

export const ContainerImageLinks = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 148px;
    height: 28px;
    gap: 10px;
    a{
        text-decoration: none;
        color: var(--grey-1);
    }
`

