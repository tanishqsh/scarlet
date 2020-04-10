import React from 'react';
import Frame from "../Frame/Frame";
import BottomPeak from "../../components/BottomPeak";
import Back from "../../components/Back";
import {Link} from "react-router-dom";

const containerLinks = [
    {name: 'Our services', link:'/services'},
    {name: 'People behind Scarlet.', link:'/about'},
    {name: 'Our philosophy', link:'/about'},
];

function About() {
    return(
        <div className={'page-container-primary'}>
            <Frame theme={'secondary'}/>
            <BottomPeak theme={'secondary'}/>
            <Back theme={'secondary'} changeState={()=>{}}/>
            <div className={'row inner-container'}>
                <div className={'col-sm-3'}>
                </div>
                <div className={'col-sm-3'}>
                    <h1 className={'title'}> Scarlet is simplicity. </h1>
                    <h3> Design was never supposed to be fancy – it was fundamentally created to convey information effectively. Any design that you would have to explain fails itelf. We, at Scarlet work on this basic principal of keeping things short, crisp and efficacious. Our design philosophy is building with the prime goal in mind. It reflects the way we build our websites, the way we interact with our clients and even in the way we have written this paragraph. To the point, no gibberish. </h3>
                </div>
                <div className={'col-sm-1'}/>
                <div className={'col-sm-2 cta-container'}>
                    {containerLinks.map((link,i) => (
                        <Link key={i} to={link.link}> <h2> {link.name} </h2> </Link>
                    ))}
                </div>
                <div className={'col-sm-3'}>
                </div>
            </div>
        </div>
    );
}

export default About;