import React from 'react';

function Track({track, children}) {

    const album = track.album.name;
    const title = track.name;
    const artists = track.artists;
    
    console.log(track);
    return (
        <div className='track'>
                <h1>{title}</h1>
                {artists.map((artist) => <h2 key={artist.id}>{artist.name}</h2>)}
                <h3>{album}</h3>
                {children}

        </div>
    )
}

export default Track;