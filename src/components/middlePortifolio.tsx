import React from "react"
import { H1tipograpy, Headlinetipograpy} from "../styles/Tipograpy"
import github from "../assets/Bt-Circle-github.png"
import photo from "../assets/header-bg.png"
import { MiddleMainContainer, HeadLineContainer, ButtonMyGithub, ContainerButtonGithub, MiddleContainer} from "./middleStyle"

export const MiddlePortifolio = () =>{
    return(
        <MiddleMainContainer>
            <MiddleContainer>
                <HeadLineContainer>
                    <img src="https://media.licdn.com/dms/image/D4D03AQEgGIISI5-9Hw/profile-displayphoto-shrink_800_800/0/1699884291700?e=1707350400&v=beta&t=ewGJx8dc8fRDLAHzIgWcoAnMCgsCwphtbVLykRcJutc"/>
                    <Headlinetipograpy>Luis Eduardo Fernandes Borges</Headlinetipograpy>
                </HeadLineContainer>
                    <H1tipograpy>I love creating and developing projects</H1tipograpy>
                    <Headlinetipograpy>Discover here in this environment, created especially for you, all my projects and technologies</Headlinetipograpy>
                <ContainerButtonGithub>
                    <ButtonMyGithub href="https://github.com/PietroNog1" target="blank">
                        See My Projects
                    </ButtonMyGithub>
                    <img src={github} />
                </ContainerButtonGithub>
            </MiddleContainer>
            <img src={photo}/>
        </MiddleMainContainer>
    )
}