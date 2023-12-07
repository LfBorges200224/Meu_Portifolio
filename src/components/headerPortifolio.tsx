import React from "react";
import { H2tipograpy, H4tipograpy, } from "../styles/Tipograpy";
import { HeaderButtons, ButtonConteiner, HeaderContainer, HeaderContainerContain  } from "./headerStyle";


export const HeaderPortifolio = () => {
    return(
        <HeaderContainer>
            <HeaderContainerContain> 
                <H2tipograpy>Luis</H2tipograpy>
                <ButtonConteiner>
                    <HeaderButtons>
                        <H4tipograpy>
                            Home
                        </H4tipograpy>
                    </HeaderButtons>
                    <HeaderButtons>
                        <H4tipograpy>
                            Projects
                        </H4tipograpy>
                    </HeaderButtons>
                    <HeaderButtons>
                        <H4tipograpy>
                            Contatos
                        </H4tipograpy>
                    </HeaderButtons>
                    <HeaderButtons>
                        <H4tipograpy>
                            Midias Digitais
                        </H4tipograpy>
                    </HeaderButtons>
                </ButtonConteiner>
            </HeaderContainerContain>
        </HeaderContainer>
    );
}
