import React from 'react';
import {connect} from 'react-redux';
import {setMessage} from "../../redux/actions";

function Message({message, setMessage}) {
    const changeMessage = () => {
        setMessage('I changed the message');
    }

    return (
        <>
            <h1>{message}</h1>
            <button onClick={changeMessage}>Change message from state</button>
        </>
    )
}

export default connect(
    state => ({
        message: state.message
    }),
    {
        setMessage
    }
)(Message);