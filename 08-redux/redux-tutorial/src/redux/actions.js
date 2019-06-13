/**
 * what happend in our application
 * they cause a state change
 * { type : string, payload? : any }
 * 
 * { type: 'SET_NAME', payload: 'different name'}
 * 
 * action creator
 */

export const SET_NAME = 'SET_NAME';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const SET_TASKS = 'SET_TASKS';
export const SET_ERROR = 'SET_ERROR';

 // sync action
 export function setName(newName) {
     return {
        type: SET_NAME, 
        payload: newName
     }
 }

 /**
  * set the isLoading flag to true/false
  */
export function toggleLoading(isLoading) {
    return {
        type: TOGGLE_LOADING,
        payload: isLoading
    }
}

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error
    }
}

export function fetchTasks() {
    return async function(dispatch) {
        dispatch(toggleLoading(true));
        try {
            const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
            const json = await response.json();
            dispatch(setTasks(json));
        } catch(err) {
            dispatch(setError(err));
        }
        dispatch(toggleLoading(false));
    }
}



