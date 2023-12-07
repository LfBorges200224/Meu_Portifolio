import React from "react";
import { H2tipograpy, H3tipograpy, Bodytipograpy } from "../styles/Tipograpy";
import email from "../assets/emailRetangulo.png"
import linkedin from "../assets/linkedinRetangulo.png"
import whatsapp from "../assets/whatsappRetangulo.png"

export const ContactPortifolio = () => {

    return(
        <div>
            <div>
                <div>
                    <H2tipograpy>Let's set up a conversation and develop our creativity together?</H2tipograpy>
                    < Bodytipograpy>Advertise your brand organically within Dribbble’s design inspiration feed.</ Bodytipograpy>
                </div>
                <div>
                    <div>
                        <img src={whatsapp}/>
                        <H3tipograpy>My Phone</H3tipograpy>
                        < Bodytipograpy>I'm available for a voice chat, let's about creativity together?</ Bodytipograpy>
                        <a href=" https://wa.me/5511977478337" target="blank">Call Now</a>
                    </div>
                    <div>
                        <img src={email}/>
                        <H3tipograpy>My Email</H3tipograpy>
                        < Bodytipograpy>Send me an email reporting feedbacks, suggestions and ideas</ Bodytipograpy>
                        <a href="mailto:lfborges200224@gmail.com?" target="blank">Send email now</a>
                    </div>
                    <div>
                        <img src={linkedin}/>
                        <H3tipograpy>My Linkedin</H3tipograpy>
                        < Bodytipograpy>We can create more constant interactions as well as a sharing network</ Bodytipograpy>
                        <a href="https://www.linkedin.com/in/luis-borges-a653001b6/" target="blank">Go to Linkedin Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}