import React from 'react';

import '../Menu/styles.css';

function ButtonLink(props) {
    console.log(props);
    
    return (
        <a className={props.ButtonLink} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;