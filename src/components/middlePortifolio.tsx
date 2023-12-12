import React from "react"
import { H1tipograpy, Headlinetipograpy} from "../styles/Tipograpy"
import { MiddleMainContainer, HeadLineContainer, ButtonMyGithub, ContainerGitHubDiv, ContainerButtonGithub, MiddleContainer, MiddleContainerContain, ContainerPhoto} from "./middleStyle"
import js from "../assets/js.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import html from "../assets/html.png"

export const MiddlePortifolio = () =>{
    return(
        <MiddleMainContainer id="middlePart">
            <MiddleContainer>
                <MiddleContainerContain>
                    <HeadLineContainer>
                        <img src="https://media.licdn.com/dms/image/D4D03AQEgGIISI5-9Hw/profile-displayphoto-shrink_800_800/0/1699884291700?e=1707350400&v=beta&t=ewGJx8dc8fRDLAHzIgWcoAnMCgsCwphtbVLykRcJutc"/>
                        <Headlinetipograpy>Luis Eduardo Fernandes Borges</Headlinetipograpy>
                    </HeadLineContainer>
                        <H1tipograpy>I <span>full stack developer</span> I create and <span>develop</span> projects</H1tipograpy>
                        <Headlinetipograpy>Technology enthusiast passionate about programming and web development.
My curiosity and creativity drive me to seek new challenges and opportunities to improve my knowledge.</Headlinetipograpy>
                    <ContainerButtonGithub>
                        <ButtonMyGithub href="https://github.com/PietroNog1" target="blank">
                            See My Projects
                        </ButtonMyGithub>
                        <ContainerGitHubDiv>

                        </ContainerGitHubDiv>
                    </ContainerButtonGithub>
                </MiddleContainerContain>
                    <ContainerPhoto>
                        <img src={html} />
                        <img src={css} />
                        <img src={js} />
                        <img src={node} />
                        <img src={react} />
                    </ContainerPhoto>
            </MiddleContainer>
        </MiddleMainContainer>
    )
}