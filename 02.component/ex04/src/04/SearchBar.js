import React from 'react';

const SearchBar = (params) => {
    return (
        <div className={ 'Searchbar' }>
            찾기: <input type='text' placeholder='search'/>
        </div>
    );
};

export default SearchBar;