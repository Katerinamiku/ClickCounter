import React from 'react';
import {store} from "./store";

type SetDataAT = {
    type: 'SET_DATA'
    disabled: boolean
}
type IncreaseCountAT = {
    type: 'INCREASE_COUNT'
}
type ResetCountAT = {
    type: 'RESET_COUNT'
}
export type ActionType = SetDataAT | IncreaseCountAT | ResetCountAT

const initialState: number = 0;

export const CountsReducer = (state = initialState, action: ActionType): number => {
    switch (action.type) {
        case 'SET_DATA':
            return state = store.getState().startValue
        case 'INCREASE_COUNT':
            return state + 1
        case 'RESET_COUNT':
            return state = store.getState().startValue
        default:
            return state
    }

};


export const SetDataAC = (disabled: boolean): SetDataAT => {
    return {
        type: 'SET_DATA',
        disabled
    }
}
export const IncreaseCountAC = (): IncreaseCountAT => {
    return {
        type: 'INCREASE_COUNT',
    }
}
export const ResetCountAC = (): ResetCountAT => {
    return {
        type: 'RESET_COUNT',
    }
}
