import React, {useRef, useState} from 'react';



function Cursor(props) {
    return(
        <div className={'cursor-'+props.cursor}>
        </div>
    )
}

export default Cursor;