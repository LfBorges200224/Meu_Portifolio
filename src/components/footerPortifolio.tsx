import React from "react";
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import { H3tipograpy, Headlinetipograpy } from "../styles/Tipograpy";
import { FooterContainer, ContainerText, ContainerPhoto, Linktag, ContainerLinks} from "./footerStyle";

export const FooterPortifolio = () => {
    return(
        <FooterContainer id="footerPart">
            <ContainerPhoto >
                <img src="https://media.licdn.com/dms/image/D4D03AQEgGIISI5-9Hw/profile-displayphoto-shrink_800_800/0/1699884291700?e=1707350400&v=beta&t=ewGJx8dc8fRDLAHzIgWcoAnMCgsCwphtbVLykRcJutc"/>
                <ContainerText >
                    <H3tipograpy>Thank you!</H3tipograpy>
                    <Headlinetipograpy>Follow me on my social networks and let's talk</Headlinetipograpy>
                </ContainerText >
            </ContainerPhoto >
            <ContainerLinks>
                <Linktag href="https://www.linkedin.com/in/luis-borges-a653001b6/" target="blank">
                    <img src={linkedin}/>
                </Linktag>
                <Linktag href="https://www.instagram.com/lud1s_" target="blank">
                    <img src={instagram}/>
                </Linktag>
                <Linktag href="https://www.facebook.com/profile.php?id=100010923947903" target="blank">
                    <img src={facebook}/>
                </Linktag>
            </ContainerLinks>
        </FooterContainer>
    )
}