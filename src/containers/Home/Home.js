import React from 'react';
import BottomPeak from "../../components/BottomPeak";
import Frame from "../Frame/Frame";
import StudioConcept from "../StudioConcept/StudioConcept";


function Home() {
    return(
        <div className={'home-container container-fluid'}>
            <StudioConcept/>
            <BottomPeak class={'primary'}/>
            <Frame/>
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

export default Home;