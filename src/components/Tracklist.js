import React from 'react';
import Track from './Track';

function Tracklist({tracks}) {
    return (
        <div className='track-list'>
            <h1>Tracklist</h1>
            {tracks.map((track) => <Track track={track} key={track.title} />)}
        </div>
    )
}

export default Tracklist;