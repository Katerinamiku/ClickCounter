import React from 'react';

export type ActionType =
    ReturnType<typeof incCountsAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof resetCountAC>

type InitialValueType = {
    count: number
    maxValue: number
    startValue: number
    message: string
}

const initialState = {
    count: 0,
    maxValue: 0,
    startValue: 0,
    message: ''
};

export const CountsReducer = (state: InitialValueType = initialState, action: ActionType): InitialValueType => {
    switch (action.type) {
        case 'INC_COUNTS':
            return {...state, count: state.count + 1}
        case 'RESET_COUNT':
            return {...state, count: state.startValue}
        case 'SET_START':
            if (action.value < 0) {
                return {...state, message: 'Incorrect value!'}
            } else {
                return {...state, startValue: action.value, message: ''}
            }
        case 'SET_MAX':
            if (action.value < 0) {
                return {...state, message: 'Incorrect value!'}
            } else {
                return {...state, maxValue: action.value, message: ''}
            }
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
        type: 'RESET_COUNT',

    } as const
}
