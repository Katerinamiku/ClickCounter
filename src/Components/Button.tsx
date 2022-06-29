import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: (disabled: boolean) => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack(props.disabled)
    }
    return (
        <button onClick={onClickButtonHandler} disabled={props.disabled}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.name}</button>
    )
}
