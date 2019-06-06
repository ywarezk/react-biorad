/**
 * 
 */

import React, {useContext} from 'react';
import Gran1 from './Gran1';
import MessageContext from '../contexts/msg.context';

export default function Child1(props) {
    // {msg.., cb}
    const contextValue = useContext(MessageContext);

    const changeContext = () => {
        contextValue.cb('this is a new message');
    }

    return (
        <>
            <h1>Child1 {props.message}</h1>
            <h2>
                {contextValue.msg}
            </h2>
            <button onClick={changeContext}>change context</button>
            <Gran1>
                <h1>
                    <span>
                        hello from parent
                    </span>
                </h1>
            </Gran1>
        </>
    )
}