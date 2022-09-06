import {AppRootStateType} from "../redux/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined;
        }
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('appState', serializedState)
    } catch {
//ignore
    }
}
