import React from 'react';
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
                <a href={'tel:+9169419289'}>
                    <h1> {/* Text added in ::After Pseudo-element */ } </h1>
                </a>
                <img alt={'Coffee Cup'} src={CoffeeCup}/>
            </div>
        </div>
    );
}

export default Contact;