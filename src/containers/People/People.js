import React from 'react';
import CurrentDate from "../../components/CurrentDate";
import SocialLinks from "../../components/SocialLinks";
import Logo from "../../components/Logo";
import CallToAction from "../../components/CallToAction";
import Back from "../../components/Back";
import TanishqImage from '../../images/tanishq.jpg';
import BottomPeak from "../../components/BottomPeak";
import {Link} from "react-router-dom";

export default function People(){

    return(
        <div className={'people-container container-fluid'}>
            <CurrentDate theme={'secondary'}/>
            <SocialLinks theme={'secondary'}/>
            <Logo theme={'secondary'}/>
            <BottomPeak theme={'secondary'}/>
            <Back theme={'secondary'} changeState={()=>{}}/>
            <CallToAction actionText={'Go Home'} actionLink={'/'} theme={'secondary'}/>
            <div className={'row'}>
                <div className={'col-sm-3'}/>
                <div className={'col-sm-3 text-left'}>
                    {}
                </div>
                <div className={'col-sm-3 text-left'}>
                    <h1> Divyang </h1>
                    <h3> An entrepreneur with a demonstrated history of Startup creation and business development. Skilled in system modeling, application development, marketing, web development, user experience and a strong business development professional with a B. Tech + MBA focused on Marketing, Operations and Information Technology from SVKM's Narsee Monjee Institute of Management Studies (NMIMS).
                    </h3>
                    <hr/>
                    <h4> <a target={'blank'} href={'https://www.linkedin.com/in/divyang-kaushik-672b37142/'}> Connect </a> </h4>
                </div>
                <div className={'col-sm-3'}/>
            </div>
        </div>
    );
}