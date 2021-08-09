import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 부모에 있는 상태를 변경시켜 줄 callback함수 만들기
const SearchBar = ({ callback, keyword }) => {

    console.log(`rendereag.. SearchBard`);

    const handleChange = function(e) {
        callback(e.target.value);
    }
    
    return (
        <div className={ 'Searchbar' }>
            찾기: <input 
                    type='text' 
                    placeholder='search'
                    value={ keyword } 
                    onChange={ handleChange }
                  />
        </div>
    );
};

export default SearchBar;

SearchBar.propTypes = {
    callback: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired
}