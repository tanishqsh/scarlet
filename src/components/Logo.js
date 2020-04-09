import React from 'react';


function Logo(props){
    return(
        <div className={'logo-container-'+props.theme}>
            <a href={'/'}>
                <h2> Scarlet. </h2>
            </a>
        </div>
    );
}

export default Logo;