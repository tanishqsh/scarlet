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
                    <h1> Tanishq </h1>
                    <h3> Full Stack Developer, Brand Designer and a Psychological Driven Marketer at the core. Founded Scarlet, TheLabs and Whoosh.
                        With over 8 years of product & design development, psychology-driven advertising, I have helped countless brands in India, UK and UAE refine and implement their ideas. With a platform that curates educational short term programs outside India, I have helped countless students to get an experience of international education.
                        With a brand that focuses on revolutionary new designs, I have helped over tens of thousands of customers at Whoosh, to re-define their fashion.
                        I am a conceptualist and this is my story.
                    </h3>
                </div>
                <div className={'col-sm-3 text-left'}>
                    <h1> Divyang </h1>
                    <h3> I am a marketer with an interest in consumer neuroscience and psychology-based marketing, building the best of brands. I have spent the last couple of years mastering consultancy and strategy
                        in the product as well as the service sector. As a founder, I have been fueling Scarlet. and TheLabs with a great amount of dynamism. Working on new and impactful ideas is the best source of amusement for me.
                        Always up for virtual coffee and good brainstorming sessions. I call myself an explorer, ahoy!
                    </h3>
                    <hr/>
                    <h4> <a target={'blank'} href={'https://www.linkedin.com/in/divyang-kaushik-672b37142/'}> Connect </a> </h4>
                </div>
                <div className={'col-sm-3'}/>
            </div>
        </div>
    );
}