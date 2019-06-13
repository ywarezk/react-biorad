import React from 'react';

export default (props) => {
    return (
        <>
            <h1>Im in the about page {props.match.params.myName}</h1>
        </>
    )
}