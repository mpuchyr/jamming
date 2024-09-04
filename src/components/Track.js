import React from 'react';

function Track({track}) {
    return (
        <div className='track'>
            <h1>{track.title}</h1>
            <h2>{track.artist}</h2>
        </div>
    )
}

export default Track;