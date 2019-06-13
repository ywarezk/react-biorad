import { TOGGLE_LOADING, SET_TASKS, SET_ERROR } from '../actions';
import { Map } from 'immutable';

function todoReducer(previousState, action) {
    switch(action.type) {
        case TOGGLE_LOADING:
            return previousState.set('isLoading', action.payload);
        case SET_TASKS:
            return previousState.set('tasks', action.payload);
        case SET_ERROR:
            return previousState.set('error', action.payload);
        default:
            return previousState;
    }
}

const initialState = Map({ 
    tasks: [],
    isLoading: false,
    error: null
})

const MAP = {
    [TOGGLE_LOADING]: todoReducer,
    [SET_TASKS]: todoReducer,
    [SET_ERROR]: todoReducer,
}

export default (state = initialState, action) => {
   return MAP[action.type] ? MAP[action.type](state, action) : state;
}