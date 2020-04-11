import React from 'react';

const pills = [
    {name: 'Instagram', link: 'https://www.instagram.com/be.scarlet/'},
    {name: 'Mumbai, India / 2020', link: '/contact'}
];

function SocialLinks(props){
    return(
        <div className={'social-links-container-'+props.theme}>
                <h2>
                { pills.map((pill, i) => (
                    <a target={'_blank'} rel="noopener noreferrer" key={i} href={pill.link}>
                        <span> {pill.name} {pills[i+1]!= null?<span>–</span>:<span></span>}  </span>
                    </a>
                )) }
                </h2>
        </div>
    );
}

export default SocialLinks