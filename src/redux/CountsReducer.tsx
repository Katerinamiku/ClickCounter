import React from 'react';
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";


export type ActionType =
    ReturnType<typeof incCountsAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof resetCountAC>



type InitialValueType = {
    count: number
    maxValue: number
    startValue: number
}

const initialState = {
    count: 0,
    maxValue: 0,
    startValue: 0
};

export const CountsReducer = (state: InitialValueType = initialState, action: ActionType): InitialValueType => {
    switch (action.type) {
        case 'INC_COUNTS':
            return {...state, count: state.count + 1}
        case 'RESET_COUNT':
            return {...state, count: state.startValue}
        case 'SET_START':
            return {...state, startValue: action.value}
        case 'SET_MAX':
            return {...state, maxValue: action.value}
        default:
            return state
    }
};
//-----------------AC-------------------
export const incCountsAC = () => {
    return {
        type: 'INC_COUNTS'
    } as const
}
// export const setCountFromLS = (count: number) => {
//     return {
//         type: 'SET_COUNT_LS',
//         count
//     } as const
// }
// export const setStartFromLS = (start: number) => {
//     return {
//         type: 'SET_START_LS',
//         start
//     } as const
// }
// export const setMaxFromLS = (max: number) => {
//     return {
//         type: 'SET_MAX_LS',
//         max
//     } as const
// }
export const setStartValueAC = (value: number) => {
    return {
        type: 'SET_START',
        value
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET_MAX',
        value
    } as const
}
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT'
    } as const
}
//-------------THUNK------------------
// export const incCountsTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
//     let currentValue = getState().counts.count;
//     let currentStartValue = getState().counts.startValue;
//     let currentMaxValue = getState().counts.maxValue;
//     localStorage.setItem('countsValue', JSON.stringify(currentValue + 1));
//     localStorage.setItem('startValue', JSON.stringify(currentStartValue))
//     localStorage.setItem('maxValue', JSON.stringify(currentMaxValue))
//     dispatch(incCountsAC())
// }
// export const resetCountsTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
//     let currentStartValue = getState().counts.startValue;
//     let currentMaxValue = getState().counts.maxValue;
//     localStorage.setItem('startValue', JSON.stringify(currentStartValue))
//     localStorage.setItem('maxValue', JSON.stringify(currentMaxValue))
//     dispatch(resetCountAC())
// }
// export const setValuesFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     const valueAsString = localStorage.getItem('countsValue')
//     const start = localStorage.getItem('startValue');
//     const max = localStorage.getItem('maxValue');
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispatch(setCountFromLS(newValue))
//     }
//     if (start && max) {
//         dispatch(setStartFromLS(JSON.parse(start)));
//         dispatch(setMaxFromLS(JSON.parse(max)));
//     }
// }
