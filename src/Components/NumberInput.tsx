import React, {ChangeEvent} from 'react';
import s from './ClickCounter.module.css'

type NumberInputType = {
    value:number
    children: string
    callback: (value: number)=>void
    callBackClear: ()=>void
}

export const NumberInput = (props: NumberInputType) => {

    const onChangeHandler= (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(+event.currentTarget.value)
        props.callBackClear()
    }

    return (
        <div className={s.inputs}>
            {props.children && <span>{props.children}</span>}
            <input required
                   value={props.value}
                   type={'number'}
                   onChange={onChangeHandler}
            />
        </div>
    );
};


