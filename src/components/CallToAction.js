import React from 'react';
import {Link} from "react-router-dom";

function CallToAction(props) {
    return(
        <div className={'call-to-action-container-'+props.theme}>
            <Link to={props.actionLink?props.actionLink:'/contact'}>
               {props.actionText?<h2> {props.actionText} </h2>: <h2> A touch away. </h2> }
            </Link>
        </div>
    )
}

export default CallToAction;