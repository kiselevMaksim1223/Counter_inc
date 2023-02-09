import {combineReducers,legacy_createStore} from "redux";
import {countReducer} from "../counterReducer/counter-reducer";


const rootReducer = combineReducers({
    counterState: countReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store