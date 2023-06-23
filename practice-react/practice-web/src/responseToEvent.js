import React from 'react';

function ResponseToEvent({count, onClick}) {
    return (
        <>
            <p>{count}</p>
            <button onClick={onClick}>click me</button>
        </>
    )
}

export default ResponseToEvent;