import React from 'react';
import BottomPeak from "../../components/BottomPeak";
import Back from "../../components/Back";
import Astronaut from "../../images/astronaut.png";
import {Link} from "react-router-dom";
import Frame from "../Frame/Frame";

const services = [
    {name: 'Product Development', description: 'Beautiful creation requires attention to detail.', link:'/contact'},
    {name: "Brand Building & Positioning", description: 'How they perceive, matters.', link:'/contact'},
    {name: 'Intelligent Advertising', description: 'Be in their dreams.', link:'/contact'},
];


function Services() {

    return(
        <div className={'services-container'}>
            <Frame theme={'secondary'}/>
            <BottomPeak theme={'secondary'}/>
            <Back theme={'secondary'} changeState={()=>{}}/>
            <div className={'container-fluid text-center'}>
                <div className={'row'}>
                    <div className={'col-sm-4 content-outer'}>
                        <div className={'product-service-wrapper'}>
                            {
                                services.map((service, i) => (
                                    <Link key={i} to={service.link}>
                                        <div className={'product-service'}>
                                            <h1> {i+1}. {service.name} </h1>
                                            <h3> {service.description}  </h3>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'col-sm-4 content-outer'}>
                        <img style={{transform: "translate(100px);"}} alt="India\'s top advertising, branding and product development studio" src={Astronaut}/>
                    </div>
                    <div className={'col-sm-4 quote-container'}>
                        <div className={'quote'}>
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
        </div>
    )
}

export default Services