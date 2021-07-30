import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);
    const onKeyPressInput = function(e){
        // enter 치면 출력
        if(e.key == 'Enter'){
            console.log('onKeyPressInput');
            //e.target.value = '';          // bad
        }
    }
    const onFocusInput = function(e){
        console.log('onFocusInput')
    }
    const onBlurInput = function(e){
        console.log('onBlurInput')
    }
    const onMouseOverImage = function(e){
        console.log('onMouseOverImage')
    }
    const onMouseMoveImage = function(e){
        console.log('onMouseMoveImage')
    }
    const onMouseOutImage = function(e){
        console.log('onMouseOutImage')
    }
    const onMouseDownImage = function(e){
        console.log('onMouseDownImage')
    }
    const onMouseUpImage = function(e){
        console.log('onMouseUpImage')
    }
    const onClickImage = function(e){
        console.log('onClickImage')
    }
    const onDoubleClickImage = function(e){
        console.log('onDoubleClickImage')
    }


    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}