import React from 'react';


export type SetMaxValueAT = {
    type: 'SET_MAX_VALUE'
    value: number
}
export type ActionType = SetMaxValueAT

const initialState: number = 0;

export const MaxValueReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_MAX_VALUE':
            return state = action.value

        default:
            return state
    }

};

export const SetMaxValueAC = (value: number): SetMaxValueAT => {
    return {
        type: 'SET_MAX_VALUE',
        value
    }
}

