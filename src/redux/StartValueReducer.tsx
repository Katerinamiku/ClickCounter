import React from 'react';


export type SetStartValueAT = {
    type: 'SET_START_VALUE'
    value: number
}
export type ActionType = SetStartValueAT

const initialState: number = 0;

export const StartValueReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return state = action.value

        default:
            return state
    }

};

export const SetStartValueAC = (value: number): SetStartValueAT => {
    return {
        type: 'SET_START_VALUE',
        value
    }
}

