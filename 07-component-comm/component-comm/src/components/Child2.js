import React from 'react';
import Gran2 from './Gran2';

export default function Child2() {
    const inputRef = React.createRef();
    return (
        <>
            <h1>Child2</h1>
            <Gran2 forwardRef={inputRef} />
        </>
    )
}