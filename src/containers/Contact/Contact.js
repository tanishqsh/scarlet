import React from 'react';
import Frame from "../Frame/Frame";
import Back from "../../components/Back";
import CoffeeCup from '../../images/coffee.png';
import CurrentDate from "../../components/CurrentDate";
import SocialLinks from "../../components/SocialLinks";
import Logo from "../../components/Logo";
import CallToAction from "../../components/CallToAction";

function Contact() {
    return(
        <div className={'page-container-primary'}>
            <CurrentDate theme={'secondary'}/>
            <SocialLinks theme={'secondary'}/>
            <Logo theme={'secondary'}/>
            <CallToAction actionText={'Go Home'} actionLink={'/'} theme={'secondary'}/>
            <Back changeState={()=>{}} theme={'secondary'}/>
            <div className={'contact-page-container'}>
                <h1>  </h1>
                <img alt={'Coffee Cup'} src={CoffeeCup}/>
            </div>
        </div>
    );
}

export default Contact;