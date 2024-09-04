import React from 'react';

function SearchBar() {
    return (
        <form>
            <input type='text' placeholder='Search for a song...' />
            <button>Search</button>
        </form>
    )
}

export default SearchBar;