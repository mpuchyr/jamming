import React from 'react';
import Track from './Track';

function Playlist({tracks, handleRemoveFromUserPlayList, playListTitle, setPlayListTitle}) {
    return (
        <div className='play-list'>
            <input value={playListTitle} type='text' onChange={(e) => setPlayListTitle(e.target.value)}/>
            {tracks.map((track) => <Track track={track}><button onClick={() => handleRemoveFromUserPlayList(track.id)}>-</button></Track>)}
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;