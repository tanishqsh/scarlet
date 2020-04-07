import React from 'react';
import './bottom-navigation.css'

class BottomNavigation extends React.Component{
    render() {
        return(
            <div className={'bottom-navigation-wrapper'}>
               <div className={'menu-container'}>
                   <a href={'tel:+919769419289'}>
                    <li> Contact </li>
                   </a>
                   <a href={'/terms'}>
                       <li> Terms </li>
                   </a>
                   <a href={'/services'}>
                       <li> Services </li>
                   </a>
               </div>
            </div>
        );
    }
}

export default BottomNavigation;