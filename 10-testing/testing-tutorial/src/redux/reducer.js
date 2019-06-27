import {SET_MESSAGE} from './actions';

const initialState = {message: 'hello redux'}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state;
    }
}