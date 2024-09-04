import React from 'react';
import Tracklist from './Tracklist';

function SearchResults({results, handleAddToUserPlayList}) {
    return (
        <div className='results'>
            <h1>Search Results</h1>
            <Tracklist tracks={results} handleAddToUserPlayList={handleAddToUserPlayList} />
        </div>
    )
}

export default SearchResults;