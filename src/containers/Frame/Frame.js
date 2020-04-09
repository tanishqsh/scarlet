import React from 'react';
import Logo from "../../components/Logo";
import SocialLinks from "../../components/SocialLinks";
import CurrentDate from "../../components/CurrentDate";
import CallToAction from "../../components/CallToAction";

function Frame(props) {
    return(
        <div className={'frame-container'}>
            <CurrentDate theme={props.theme}/>
            <SocialLinks theme={props.theme}/>
            <Logo theme={props.theme}/>
            <CallToAction theme={props.theme}/>
        </div>
    );
}

export default Frame;