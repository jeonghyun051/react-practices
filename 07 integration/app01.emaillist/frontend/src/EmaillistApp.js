import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'


export default function EmaillistApp() {
    const [emails] = useState(data);
    const [ keyword , setKeyword ] = useState('');

    const notifyKeywordChanged = function(keyword){
        setKeyword(keyword);
    }

    return (
        <div className={ 'EmaillistApp' }>
            {/* notifyKeywordChanged이 실행되면 상태가 바뀌니까 다시 그려진다. */}
            <SearchBar callback={ notifyKeywordChanged } keyword={ keyword }/> 
            <Emaillist emails={ emails } keyword={ keyword } />
        </div>
    );
}