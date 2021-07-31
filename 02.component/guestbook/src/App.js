import React, {useRef} from 'react';
import GuestBook from './GuestBook';
import './assets/css/App.css'

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    const onScroll = (e) => {
        if(outterRef.current.scrollTop + outterRef.current.clientHeight + 20 > innerRef.current.clientHeight){
            console.log("Fetch!!!");
        }
        console.log(outterRef.current.scrollTop, ":", outterRef.current.clientHeight, ":", innerRef.current.clientHeight );
    }
    return (
        <div 
            ref = { outterRef }
            className={"App"}
            onScroll={ onScroll }>
            <div ref = { innerRef }>
                <GuestBook />
            </div>
        </div>
    );
}