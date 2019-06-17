import React from 'react';

function ValidationComponent(props) {
    let message = 'No input!!!';
    let style = {
        backgroundColor: 'Yellow'
    }
    if(props.textLength) {
        if(props.textLength < 5) {
            message = 'Text too short!!!';
            style = {
                backgroundColor: 'Red'
            };
        } else if(props.textLength > 10) {
            message = 'Text too long!!!';
            style = {
                backgroundColor: 'Red'
            }
        } else if(props.textLength > 4 && props.textLength < 11) {
            message = 'Valid text!!!';
            style = {
                backgroundColor: 'Green'
            }
        }
    }
    return (
        <div>
            <span style={style}>{message}</span>
        </div>
    )
}

export default ValidationComponent;