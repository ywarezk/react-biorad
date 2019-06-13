import { SET_NAME } from '../actions';
import { Map } from 'immutable';

const initialState = Map({ 
    loggedInUsername: 'yariv katz1',
});

function loginReducer(previousState, action) {
    switch(action.type) {
        case SET_NAME:
            // previousState['loggedInUsername'] = action.payload;
            // return previousState; // DO NOT MUTATE THE STATE
            // return {...previousState, loggedInUsername: action.payload};
            return previousState.set('loggedInUsername', action.payload);
        default:
            return previousState;
    }
 }

 const MAP = {
    [SET_NAME] : loginReducer,
}

export default (state = initialState, action) => {
    return MAP[action.type] ? MAP[action.type](state, action) : state;
 }