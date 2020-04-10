import React from 'react';
import BottomPeak from "../../components/BottomPeak";
import Back from "../../components/Back";
import Astronaut from "../../images/astronaut.png";

function Services() {
    return(
        <div className={'services-container'}>
            <BottomPeak theme={'secondary'}/>
            <Back theme={'secondary'} changeState={()=>{}}/>
            <div className={'container-fluid text-center'}>
                <div className={'row '}>
                    <div className={'col-sm-4 content-outer'}>
                        <div className={'product-service-wrapper'}>
                            <div className={'product-service'}>
                                <h1> Product Development
                                    <div className={'expanded-explanation'}>

                                    </div>
                                </h1>
                                <h3> Hover to know more! </h3>
                            </div>
                            <div className={'product-service'}>
                                <h1> Brand Building <br/> & Positioning </h1>
                                <h3> Hover to know more! </h3>
                            </div>
                            <div className={'product-service'}>
                                <h1> Intelligent Advertising </h1>
                                <h3> Hover to know more! </h3>
                            </div>
                        </div>
                    </div>
                    <div className={'col-sm-4'}>
                        <img alt="India\'s top advertising, branding and product development studio" src={Astronaut}/>
                    </div>
                    <div className={'col-sm-4 quote-container'}>
                        <h1>  Any half-awake
                            materialist well
                            knows – that
                            which you hold
                            holds you.
                             </h1>
                        <h3> Tom Robbins, 1936. </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services