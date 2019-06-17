import React from 'react';

function CharComponent(props) {
    const style = {
        'display': 'inline-block',
        'padding': '16px',
        'textAlign': 'center',
        'margin': '16px',
        'border': '1px solid black'
    }

    return (
        <div style={style} onClick={props.handler}>
            {props.char}
        </div>
    )
}

export default CharComponent;