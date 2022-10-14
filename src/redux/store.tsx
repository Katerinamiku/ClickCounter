import { combineReducers, legacy_createStore} from 'redux';
import {CountsReducer} from "./CountsReducer";
import {loadState, saveState} from "../utilits/localStorage-utils";

const rootReducer = combineReducers({
    counts: CountsReducer,
})

export const store = legacy_createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counts: store.getState().counts,
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>;



