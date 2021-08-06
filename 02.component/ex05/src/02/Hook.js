import React, { useState, useRef, Fragment, useEffect } from 'react';

const Hook = ({ color }) => {
    const [boxColor, setBoxColor] = useState( color );
    const h3Ref = useRef(null);
    
    useEffect(()=>{
        setBoxColor(color);
    },[color])
    
    return (
        <h3 
            style={ {
                width: 300,
                height: 50,
                backgroundColor: boxColor
            }}
            ref= { h3Ref }    
        />
    );
};

export default Hook;