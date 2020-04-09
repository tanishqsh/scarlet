import React from 'react';
import Frame from "../Frame/Frame";
import BottomPeak from "../../components/BottomPeak";
import Back from "../../components/Back";

function About() {
    return(
        <div className={'page-container-primary'}>
            <Frame theme={'secondary'}/>
            <BottomPeak theme={'secondary'}/>
            <Back theme={'secondary'} changeState={()=>{}}/>
            <div className={'row inner-container'}>
                <div className={'col-sm-2'}/>
                <div className={'col-sm-7'}>
                    <h1 className={'title'}> Conceptualisation & Implementation <span className={'alt'}> Studio </span> </h1>
                    <h3> A conceptualisation studio that expertises in advertising, branding
                        and product development. </h3>
                </div>
                <div className={'col-sm-3'}/>
            </div>
        </div>
    );
}

export default About;