import React from 'react';
import {setMaxValueAC, setStartValueAC} from "./CountsReducer";

export type ActionType = ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
type InitialValueType = {
    message: string
}
const initialState = {
    message: ''
};

export const MessagesReducer = (state: InitialValueType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_START':
            if (action.value < 0) {
                return {...state, message: 'Incorrect value!'}
            } else {
                return {...state, message: ''}
            }
        case 'SET_MAX':
            if (action.value < 0) {
                return {...state, message: 'Incorrect value!'}
            } else {
                return {...state, message: ''}
            }
        default:
            return state
    }
};


