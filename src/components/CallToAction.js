import React from 'react';
import {Link} from "react-router-dom";

function CallToAction(props) {
    return(
        <div className={'call-to-action-container-'+props.theme}>
            <Link to={'/contact'}>
                <h2> A touch away. </h2>
            </Link>
        </div>
    )
}

export default CallToAction;