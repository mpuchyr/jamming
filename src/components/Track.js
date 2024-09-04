import React from 'react';

function Track({track, children}) {
    return (
        <div className='track'>
            <h1>{track.title}</h1>
            <h2>{track.artist}</h2>
            {children}
        </div>
    )
}

export default Track;