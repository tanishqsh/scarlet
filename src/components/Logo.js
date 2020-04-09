import React from 'react';
import {Link} from "react-router-dom";


function Logo(props){
    return(
        <div className={'logo-container-'+props.theme}>
            <Link to={'/'}>
                <h2> Scarlet. </h2>
            </Link>
        </div>
    );
}

export default Logo;