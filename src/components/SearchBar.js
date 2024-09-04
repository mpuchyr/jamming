import React, { useState } from 'react';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    function handleOnChange(e) {
        setSearchInput(e.target.value);
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(e);
        setSearchInput('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type='text' placeholder='Search for a song...' value={searchInput} onChange={(e) => handleOnChange(e)}/>
            <button>Search</button>
        </form>
    )
}

export default SearchBar;