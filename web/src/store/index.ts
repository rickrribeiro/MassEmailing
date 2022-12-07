import { applyMiddleware, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit';

const functionResolver = store => next => action => {
    console.log("FUNCTION RESOLVER")
    console.log(store)
    console.log(action)
    next(action);
}


const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;
