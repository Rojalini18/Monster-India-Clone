import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { AppReducer } from "./AppReducer/Reducer";
import { AuthReducer } from "./AuthReducer/Reducer";

const rootReducer = combineReducers({
    app:AppReducer,
    auth:AuthReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

