

// {message: 'hello redux'}
// {message: 'I changed you'}

const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(newMessage) {
    return {
        type: SET_MESSAGE,
        payload: newMessage
    }
}