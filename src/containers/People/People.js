import React from 'react';
import CurrentDate from "../../components/CurrentDate";
import SocialLinks from "../../components/SocialLinks";
import Logo from "../../components/Logo";
import CallToAction from "../../components/CallToAction";
import Back from "../../components/Back";
import TanishqImage from '../../images/tanishq.jpg';

export default function People(){
    return(
        <div className={'people-container container-fluid'}>
            <CurrentDate theme={'secondary'}/>
            <SocialLinks theme={'secondary'}/>
            <Logo theme={'secondary'}/>
            <CallToAction actionText={'Go Home'} actionLink={'/'} theme={'secondary'}/>
            <Back changeState={()=>{}} theme={'secondary'}/>
           <div className={'row'}>
               <div className={'col-sm-6 text-center'}>
                   <img width='50%' src={TanishqImage}/>
               </div>
               <div className={'col-sm-6 text-center'}>
                   <img width='50%' src={TanishqImage}/>
               </div>
           </div>
        </div>
    );
}