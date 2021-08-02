import React from 'react';
import MyComponent from './MyComponent';

export default function() {
    return (
        <div id='App'>
            <MyComponent 
                // props01={ '문자열' }
                props02={ 1 }
                props03={true}
                props04={ {no:1} }
                props05={ [1,2,3,4] }
                props06={ () =>  '함수' }
                props07={ 100 }
                props08={ [true, true, true] }
                props08={ { no:1, name:'2', email:3 } }
                />
        </div>    
    );    
}