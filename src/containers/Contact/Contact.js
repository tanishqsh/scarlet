import React from 'react';
import Frame from "../Frame/Frame";
import Back from "../../components/Back";
import CoffeeCup from '../../images/coffee.png';

function Contact() {
    return(
        <div className={'page-container-primary'}>
            <Frame theme={'secondary'}/>
            <Back changeState={()=>{}} theme={'secondary'}/>
            <div className={'contact-page-container'}>
                <h1>  </h1>
                <img alt={'Coffee Cup'} src={CoffeeCup}/>
            </div>
        </div>
    );
}

export default Contact;