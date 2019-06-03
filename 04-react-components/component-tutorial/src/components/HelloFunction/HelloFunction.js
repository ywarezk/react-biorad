/**
 * display hello world with function component
 */

 import React, {useState} from 'react';
 import PropTypes from 'prop-types';

 export default function Hello({message}) {
    // anti pattern
    // [stateVariable, setStateVariable]
    const [stateMessage, setStateMessage] = useState(message)
    const [stateObject, setStateObject] = useState({
        hello: 'world',
        bar: 'foo'
    })

    const changeText = () => {
        // setStateMessage('change text in function');
        setStateMessage(stateMessage + ' sdfgsdfg');
    }

    return (
        <>
            <h1>{stateMessage}</h1>
            <button onClick={changeText}>
                change text
            </button>
        </>
    )
 }

Hello.propTypes = {
    message: PropTypes.string
}

Hello.defaultProps = {
    message: 'this is default value'
}