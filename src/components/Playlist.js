import React, { useState } from 'react';
import Track from './Track';

function Playlist({tracks, handleRemoveFromUserPlayList, playListTitle, setPlayListTitle}) {
    const [editingTitle, setEditingTitle] = useState(false);

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setEditingTitle(false);
        }
    }

    return (
        <div className='play-list'>
            {!editingTitle && <h1 onClick={() => setEditingTitle(true)}>{playListTitle}</h1>}
            {editingTitle && <input value={playListTitle} type='text' onChange={(e) => setPlayListTitle(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}/>}
            {tracks.map((track) => <Track track={track}><button onClick={() => handleRemoveFromUserPlayList(track.id)}>-</button></Track>)}
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;