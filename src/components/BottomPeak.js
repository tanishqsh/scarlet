import React from 'react';

const transition = ()=> {

};

const Menu = [
    {displayName:"Home", subtitle:"Know everything about us.", link:"/"},
    {displayName:"About", subtitle:"Why a conceptualization studio?", link:"/about"},
    {displayName:"Services", subtitle:"What all can we do together?", link:"/services"},
    {displayName:"Clients", subtitle:"You are in a good company.", link:"/clients"},
    {displayName:"Just a message away!", subtitle:"bescarlet.in@gmail.com", link:"mailto:bescarlet.in@gmail.com"}
];


function BottomPeak(props){
    return(
        <div className={'bottom-peak-container-primary'}>
            <div className={'menu'}>
                {
                    Menu.map(menu => (
                        <a href={menu.link}>
                            <h1>  {menu.displayName}
                                <h3> {menu.subtitle} </h3>
                            </h1>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default BottomPeak;