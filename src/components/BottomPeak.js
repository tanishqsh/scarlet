import React, {useState} from 'react';
import Back from "./Back";

const Menu = [
    {displayName:"Home", subtitle:"Know everything about us.", link:"/"},
    {displayName:"About", subtitle:"Why a conceptualization studio?", link:"/about"},
    {displayName:"Services", subtitle:"What all can we do together?", link:"/services"},
    {displayName:"Clients", subtitle:"You are in a good company.", link:"/clients"},
    {displayName:"Mail Us", subtitle:"bescarlet.in@gmail.com", link:"mailto:bescarlet.in@gmail.com"},
    {displayName:"Just a message away!", subtitle:"Instant communication via WhatsApp", link:"https://api.whatsapp.com/send?phone=919769419289&text=Hey%20Scarlet!"}
];


function BottomPeak(props){

    const [showMenu, changeShowMenu] = useState(false);

    return(
        <div
            onMouseLeave={()=> {changeShowMenu(false)}}
            onMouseEnter={()=> {changeShowMenu(true)}}
            className={`bottom-peak-container-${props.theme}`}>
            {
                showMenu?
                    <React.Fragment>
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
                    <div className={'quote'}>
                        <p> It is better to travel well than to arrive. </p>
                        <author> Buddha </author>
                    </div>
                    </React.Fragment>
                    :null
            }
        </div>
    );
}

export default BottomPeak;