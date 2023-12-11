import React, { useState } from "react";
import { H2tipograpy} from "../styles/Tipograpy";
import { HeaderButtons, ButtonConteiner, HeaderContainer, HeaderContainerContain  } from "./headerStyle";
import Aberto from "../assets/open-menu.png"
import Fechado from "../assets/close-button.png"

export const HeaderPortifolio = () => {
    const [open, setOpen] = useState(false);
    return(
        <HeaderContainer>
            <HeaderContainerContain> 
                <H2tipograpy>Luis</H2tipograpy>
                <ButtonConteiner className={open?"open":"close"}>
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
                <button className="ButtonOpen" onClick={()=> setOpen(!open)}>
                   {open?<img src={Fechado}/>:<img src={Aberto}/>}
                </button>
            </HeaderContainerContain>
        </HeaderContainer>
    );
}
