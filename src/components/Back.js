import React from 'react';

function Back(props) {

    return(
        <div className={'back-container-'+props.theme}>
            <h2 onMouseEnter={()=>{props.changeState('')}}> Close </h2>
        </div>
    );
}

export default Back;