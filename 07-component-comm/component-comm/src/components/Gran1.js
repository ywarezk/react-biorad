import React, {useContext} from 'react';
import messageService from '../services/message.service';
import MessageContext from '../contexts/msg.context';


export default function Gran1(props) {
    const send = () => {
        messageService.message.next('hello from grand1');
    }

    const contextValue = useContext(MessageContext);
    return (
        <div>
            <h1>Grandchild1 {contextValue.msg}</h1>
            {props.children}
            <button onClick={send}>Send to grand2</button>
        </div>
        
    )
        
}