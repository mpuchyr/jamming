import React from 'react';
import Track from './Track';

function Playlist({tracks, handleRemoveFromUserPlayList}) {
    return (
        <div className='play-list'>
            <h1>Play List</h1>
            {tracks.map((track) => <Track track={track}><button onClick={() => handleRemoveFromUserPlayList(track.id)}>-</button></Track>)}
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;