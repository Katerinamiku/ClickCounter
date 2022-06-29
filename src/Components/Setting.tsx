import React, {ChangeEvent} from 'react';
import s from "./ClickCounter.module.css";
import {Button} from "./Button";
import {NumberInput} from "./NumberInput";


type SettingType = {
    maxValue: number
    startValue: number
    setData: (disabled: boolean) => void
    updateStartName: (value: number) => void
    updateMaxName: (value: number) => void
    clearStorage: () => void
    disabled: boolean
   }

const Setting = (props: SettingType) => {


    const updateMaxName = (value: number) => {
        props.updateMaxName(value);
    };
    const clearStorage = () => {
        props.clearStorage()
    }

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateStartName(+e.currentTarget.value)
    }

    return (
            <div className={s.clickCounter}>
                <div className={s.setWindow}>
                    <div className={props.startValue < 0 ? s.errorInput : ''}>
                        <NumberInput callback={props.updateStartName}
                                     callBackClear={clearStorage} value={props.startValue}>
                            start value:</NumberInput>
                    </div>
                    <div className={props.maxValue < 0 ? s.errorInput : ''}>
                        <NumberInput callback={updateMaxName}
                                     callBackClear={clearStorage} value={props.maxValue}>
                            max value:</NumberInput>
                    </div>
                </div>

                <Button
                    name={'set'}
                    disabled={props.disabled}
                    callBack={props.setData}
                />
            </div>
    )
        ;
};

export default Setting;
