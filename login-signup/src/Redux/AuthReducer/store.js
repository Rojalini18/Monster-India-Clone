import {legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {reducer as AuthReducer} from "./reducer"

const store=legacy_createStore(AuthReducer,applyMiddleware(thunk))


export {store}