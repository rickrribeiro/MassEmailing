import { applyMiddleware, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const functionResolver = store => next => action => {
    console.log("FUNCTION RESOLVER")
    console.log(store)
    console.log(action)
    next(action);
}


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducers, composedEnhancer) as Store;

export default store;
