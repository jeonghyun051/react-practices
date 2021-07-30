import React, { Component, useState } from 'react';

export default function({ begin, step }) {
    
    const [ value, setValue ] = useState(begin);

    const onClickButton = () => {
        setValue(value+step);
    }
        return(
            <div>
                <button onClick={ onClickButton }>
                    <strong>+</strong>
                    { ' ' }
                    <span>{ value }</span>
                </button>
            </div>
        )
    
}