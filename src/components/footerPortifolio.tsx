import React from "react";
import { H3tipograpy, Headlinetipograpy } from "../styles/Tipograpy";
import { FooterContainer, ContainerText, ContainerPhoto, Linktag, ContainerLinks, ContainerLinkDiv, ContainerInstaDiv, ContainerFaceDiv} from "./footerStyle";

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
                    <ContainerLinkDiv></ContainerLinkDiv>
                </Linktag>
                <Linktag href="https://www.instagram.com/lud1s_" target="blank">
                    <ContainerInstaDiv></ContainerInstaDiv>
                </Linktag>
                <Linktag href="https://www.facebook.com/profile.php?id=100010923947903" target="blank">
                    <ContainerFaceDiv></ContainerFaceDiv>
                </Linktag>
            </ContainerLinks>
        </FooterContainer>
    )
}