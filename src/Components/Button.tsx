import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (<button onClick={onClickButtonHandler} disabled={props.disabled}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.name}</button>
    )
}
