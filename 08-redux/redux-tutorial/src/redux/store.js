/**
 * create a new redux store
 * store holds our state
 */

 import { createStore, applyMiddleware, combineReducers } from 'redux';
 import reduxThunk from 'redux-thunk';
//  import reducer from './reducers';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import loginReducer from './reducers/login';
 import todoReducer from './reducers/todo';

const singleReducer = combineReducers({
   login: loginReducer,
   todo: todoReducer
})

 const store = createStore(
   singleReducer,
   composeWithDevTools(
       applyMiddleware(reduxThunk)
   )
 );

 // store.dispatch(action : {type: string, payload?: any})

 export default store;