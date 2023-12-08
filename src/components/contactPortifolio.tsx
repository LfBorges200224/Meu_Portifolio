import React from "react";
import { H1tipograpy, H3tipograpy, Bodytipograpy } from "../styles/Tipograpy";
import email from "../assets/emailRetangulo.png"
import linkedin from "../assets/linkedinRetangulo.png"
import whatsapp from "../assets/whatsappRetangulo.png"
import { ContainerMainContact, ContainerTextTitle, ContainerMyContact, ContainerInformation, ContainerFormContact, ContainerForm } from "./contactStyle";

export const ContactPortifolio = () => {

    return(
        <ContainerMainContact id="contactPart">
            <ContainerInformation>
                <ContainerTextTitle>
                    <H1tipograpy>Let's set up a conversation and <span>develop our creativity</span> together?</H1tipograpy>
                    <Bodytipograpy>Advertise your brand organically within Dribbble’s design inspiration feed.</ Bodytipograpy>
                </ContainerTextTitle>
                <ContainerMyContact>
                    <ContainerFormContact>
                        <img src={whatsapp}/>
                        <ContainerForm>
                            <H3tipograpy>My Phone</H3tipograpy>
                            < Bodytipograpy>I'm available for a voice chat, let's about creativity together?</ Bodytipograpy>
                            <a href=" https://wa.me/5511977478337" target="blank">Call Now</a>
                        </ContainerForm>
                    </ContainerFormContact>
                    <ContainerFormContact>
                        <img src={email}/>
                        <ContainerForm>
                            <H3tipograpy>My Email</H3tipograpy>
                            < Bodytipograpy>Send me an email reporting feedbacks, suggestions and ideas</ Bodytipograpy>
                            <a href="mailto:lfborges200224@gmail.com?" target="blank">Send email now</a>
                        </ContainerForm>
                    </ContainerFormContact>
                    <ContainerFormContact>
                        <img src={linkedin}/>
                        <ContainerForm>
                            <H3tipograpy>My Linkedin</H3tipograpy>
                            < Bodytipograpy>We can create more constant interactions as well as a sharing network</ Bodytipograpy>
                            <a href="https://www.linkedin.com/in/luis-borges-a653001b6/" target="blank">Go to Linkedin Now</a>
                        </ContainerForm>
                    </ContainerFormContact>
                </ContainerMyContact>
            </ContainerInformation>
        </ContainerMainContact>
    )
}