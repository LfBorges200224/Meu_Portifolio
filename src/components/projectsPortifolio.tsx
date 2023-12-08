import React from "react"
import { H3tipograpy, Headlinetipograpy, H1tipograpy, Captiontipograpy, Bodytipograpy } from "../styles/Tipograpy"
import github from "../assets/github.png"
import share from "../assets/share.png"
import { ProjectMainContainer, ProjectContainer, UlcontainerProject, HeadContainerProject, LiContainerProject, ContainerLinks, ContainerImageLinks, ContainerLenguageTech, LanguageTech} from "./projectsStyle"

export const ProjectsPortifolio = () => {
    return(
        <ProjectMainContainer id="projectPart">
            <ProjectContainer>
                <HeadContainerProject>
                    <H3tipograpy>My Projects</H3tipograpy>
                    <Headlinetipograpy>Projects created at Kenzie Academy</Headlinetipograpy>
                </HeadContainerProject>
                <UlcontainerProject>
                    <LiContainerProject>
                        <H1tipograpy>Meu_Portifolio</H1tipograpy>
                            <ContainerLenguageTech>
                                <Captiontipograpy>Linguagens:</Captiontipograpy>
                                <LanguageTech>React</LanguageTech>
                                <LanguageTech>JavaScript</LanguageTech>
                                <LanguageTech>CSS</LanguageTech>
                            </ContainerLenguageTech>
                            <Bodytipograpy>
                                Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...
                            </Bodytipograpy>
                            <ContainerLinks>
                                <ContainerImageLinks>
                                    <img src={github} />
                                    <a href="https://github.com/PietroNog1/Meu_Portifolio" target="blanck">GitHub Code</a>
                                </ContainerImageLinks>
                                <ContainerImageLinks>
                                    <img src={share}/>
                                    <a href="" target="blanck">Aplicação</a>
                                </ContainerImageLinks>
                            </ContainerLinks>
                    </LiContainerProject>
                    <LiContainerProject>
                        <H1tipograpy>Projeto Final Kanvas</H1tipograpy>
                            <ContainerLenguageTech>
                                <Captiontipograpy>Linguagens:</Captiontipograpy>
                                <LanguageTech>Python</LanguageTech>
                                <LanguageTech>MySql</LanguageTech>
                                <LanguageTech>shell</LanguageTech>
                            </ContainerLenguageTech>
                            <Bodytipograpy>
                                Aplicação para uma plataforma de cursos onde podemos cadastrar usuários, cadastrar tarefas e editar e excluir elas
                            </Bodytipograpy>
                            <ContainerLinks>
                                <ContainerImageLinks>
                                    <img src={github} />
                                    <a href="https://github.com/PietroNog1/m5-projeto-final-kanvas-PietroNog1" target="blanck">GitHub Code</a>
                                </ContainerImageLinks>
                                <ContainerImageLinks>
                                    <img src={share}/>
                                    <a href="https://core-qjs0.onrender.com/api/docs/swagger-ui/#/" target="blanck">Aplicação</a>
                                </ContainerImageLinks>
                            </ContainerLinks>
                    </LiContainerProject>
                    <LiContainerProject>
                        <H1tipograpy>Hub User</H1tipograpy>
                            <ContainerLenguageTech>
                                <Captiontipograpy>Linguagens:</Captiontipograpy>
                                <LanguageTech>React</LanguageTech>
                                <LanguageTech>JavaScript</LanguageTech>
                                <LanguageTech>CSS</LanguageTech>
                            </ContainerLenguageTech>
                            <Bodytipograpy>
                                Bem-vindo(a) ao Hub Alimentado por API! Plataforma avançada que consome dados via API, com recursos como proteção de rotas, cadastro/login, edição de tópicos e responsividade.
                            </Bodytipograpy>
                            <ContainerLinks>
                                <ContainerImageLinks>
                                    <img src={github} />
                                    <a href="https://github.com/PietroNog1/hubUsers" target="blanck">GitHub Code</a>
                                </ContainerImageLinks>
                                <ContainerImageLinks>
                                    <img src={share}/>
                                    <a href="https://react-entrega-kenzie-hub-pietro-nog1.vercel.app/" target="blanck">Aplicação</a>
                                </ContainerImageLinks>
                            </ContainerLinks>
                    </LiContainerProject>
                    <LiContainerProject>
                        <H1tipograpy>FashionStore</H1tipograpy>
                            <ContainerLenguageTech>
                                <Captiontipograpy>Linguagens:</Captiontipograpy>
                                <LanguageTech>TypeScript</LanguageTech>
                                <LanguageTech>JavaScript</LanguageTech>
                                <LanguageTech>Tailwind CSS</LanguageTech>
                            </ContainerLenguageTech>
                            <Bodytipograpy>
                            Sua aplicação precisa atender uma loja com funcionalidades de administrador. Vamos começar com as rotas públicas, aquelas que não exigem autenticação
                            </Bodytipograpy>
                            <ContainerLinks>
                                <ContainerImageLinks>
                                    <img src={github} />
                                    <a href="https://github.com/PietroNog1/FashionStore" target="blanck">GitHub Code</a>
                                </ContainerImageLinks>
                                <ContainerImageLinks>
                                    <img src={share}/>
                                    <a href="https://fashion-store-entrega-template-grupo2.vercel.app/" target="blanck">Aplicação</a>
                                </ContainerImageLinks>
                            </ContainerLinks>
                    </LiContainerProject>
                </UlcontainerProject>
            </ProjectContainer>
        </ProjectMainContainer>
    )
}