import React from 'react';
import BottomPeak from "../../components/BottomPeak";
import Back from "../../components/Back";
import Frame from "../Frame/Frame";

function Clients(){
    return(
        <div className={'clients-container'}>
            <BottomPeak theme={'secondary'}/>
            <Back changeState={()=>{}} theme={'secondary'}/>
            <Frame theme={'secondary'}/>
            <div className={'container'}>
                <div className={'row content-outer'}>
                    <div className={'col-sm-4 center-center'}>
                      <div className={'content-inner-wrapper'}>
                          <h2> When the character of a man is not clear to you,
                              look at his  friends. </h2>
                          <h3> A Japanese Proverb </h3>
                      </div>
                    </div>
                    <div className={'col-sm-2'}/>
                    <div className={'col-sm-6 client-list-wrapper'}>
                        <div className={'container'}>
                            <div className={'row'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;