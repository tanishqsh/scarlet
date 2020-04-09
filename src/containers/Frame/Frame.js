import React from 'react';
import Logo from "../../components/Logo";
import SocialLinks from "../../components/SocialLinks";
import CurrentDate from "../../components/CurrentDate";
import Back from "../../components/Back";
import CallToAction from "../../components/CallToAction";

function Frame() {
    return(
        <div className={'frame-container'}>
            <Logo/>
            <SocialLinks/>
            <CurrentDate/>
            <Back/>
            <CallToAction/>
        </div>
    );
}

export default Frame;