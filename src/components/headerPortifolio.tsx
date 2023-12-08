import React from "react";
import { H2tipograpy} from "../styles/Tipograpy";
import { HeaderButtons, ButtonConteiner, HeaderContainer, HeaderContainerContain  } from "./headerStyle";


export const HeaderPortifolio = () => {
    return(
        <HeaderContainer>
            <HeaderContainerContain> 
                <H2tipograpy>Luis</H2tipograpy>
                <ButtonConteiner>
                    <HeaderButtons href="#middlePart">
                        Home
                    </HeaderButtons>
                    <HeaderButtons href="#projectPart">
                        Projects
                    </HeaderButtons>
                    <HeaderButtons href="#contactPart">
                        Contact
                    </HeaderButtons>
                    <HeaderButtons href="#footerPart">
                        Midias Digitais
                    </HeaderButtons>
                </ButtonConteiner>
            </HeaderContainerContain>
        </HeaderContainer>
    );
}
