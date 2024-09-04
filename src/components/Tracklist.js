import React from 'react';
import Track from './Track';

function Tracklist({tracks, handleAddToUserPlayList}) {
    return (
        <div className='track-list'>
            <h1>Tracklist</h1>
            {tracks.map((track) => <Track track={track} key={track.title}><button onClick={() => handleAddToUserPlayList(track)}>+</button></Track>)}
        </div>
    )
}

export default Tracklist;