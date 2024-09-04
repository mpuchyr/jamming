import React from 'react';
import Track from './Track';

function Playlist({tracks}) {
    return (
        <div className='play-list'>
            <h1>Play List</h1>
            {tracks.map((track) => <Track track={track}/>)}
            
        </div>
    )
}

export default Playlist;