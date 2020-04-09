import React from 'react';
import BottomPeak from "../../components/BottomPeak";
import Frame from "../Frame/Frame";


function Home() {
    return(
        <div className={'home-container container-fluid'}>
            <BottomPeak class={'primary'}/>
            <Frame/>
            <div className={'row inner-container'}>
                <div className={'col-sm-2'}/>
                <div className={'col-sm-7'}>
                    <h1> Conceptualisation & Implementation Studio </h1>
                    <h3> A conceptualisation studio that expertises in advertising, branding
                        and product development. </h3>
                </div>
                <div className={'col-sm-3'}/>
            </div>
        </div>
    );
}

export default Home;