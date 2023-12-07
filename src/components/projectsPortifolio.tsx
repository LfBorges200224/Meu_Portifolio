import React from "react"
import { H3tipograpy, Headlinetipograpy, H2tipograpy, Captiontipograpy, Bodytipograpy } from "../styles/Tipograpy"
import github from "../assets/github.png"
import share from "../assets/share.png"
import { ProjectMainContainer, ProjectContainer, UlcontainerProject, HeadContainerProject} from "./projectsStyle"

export const ProjectsPortifolio = () => {
    return(
        <ProjectMainContainer>
            <ProjectContainer>
                <HeadContainerProject>
                    <H3tipograpy>My Projects</H3tipograpy>
                    <Headlinetipograpy>Projects created at Kenzie Academy</Headlinetipograpy>
                </HeadContainerProject>
                <UlcontainerProject>
                    <li>
                        <H2tipograpy>Quik Start</H2tipograpy>
                        <div>
                            <div>
                                <Captiontipograpy>Linguagens</Captiontipograpy>
                                <div>
                                    <Captiontipograpy>linguagem escolhida</Captiontipograpy>
                                </div>
                            </div>
                            <Bodytipograpy>
                                Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...
                            </Bodytipograpy>
                            <div>
                                <img src={github} />
                                <a href="">GitHub Code</a>
                            </div>

                            <div>
                                <img src={share}/>
                                <a href="">Aplicação</a>
                            </div>
                        </div>
                    </li>
                </UlcontainerProject>
            </ProjectContainer>
        </ProjectMainContainer>
    )
}