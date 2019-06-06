// @flow
import React from 'react';

type MessageContext = {
    msg: string,
    cb?: (newMsg : string) => void
}

export default React.createContext<MessageContext>({msg: 'hello this is default context'});
