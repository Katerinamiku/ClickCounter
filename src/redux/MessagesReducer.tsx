import React from 'react';
import {SetStartValueAT} from "./StartValueReducer";
import {SetMaxValueAT} from "./MaxValueReducer";


export type ActionType = SetStartValueAT | SetMaxValueAT

const initialState: string = 'Enter your start and max values and press SET';

export const MessagesReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_START_VALUE':
            if (action.value < 0) {
                return state = 'Incorrect value!'
            } else {
                return state = 'Enter your start and max values and press SET'
            }
        case 'SET_MAX_VALUE':
            if (action.value < 0) {
                return state = 'Incorrect value!'
            } else {
                return state = 'Enter your start and max values and press SET'
            }
        default:
            return state
    }

};

