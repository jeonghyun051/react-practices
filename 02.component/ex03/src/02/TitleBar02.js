import React, { useState } from 'react';

export default function TitelBar02() {
    const onClickHeader = () => { 
        setNo(no + 1);
    }

    const [ no, setNo ] = useState(1);

    return (
        <h1 onClick={ onClickHeader }
        style={ {
            cursor: 'pointer'         
        } }>
            ex03 - Functional Event Handler(Functional Component) {no}
        </h1>
    )
}