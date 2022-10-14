import React from 'react';
import s from "./ClickCounter.module.css";
import {Button} from "./Button";
import {NumberInput} from "./NumberInput";


type SettingType = {
    maxValue: number
    startValue: number
    setData: (disabled: boolean) => void
    updateStartName: (value: number) => void
    updateMaxName: (value: number) => void
    disabled: boolean
}

const Setting = (props: SettingType) => {

    return (
        <div className={s.clickCounter}>
            <div className={s.setWindow}>
                <div className={props.startValue < 0 ? s.errorInput : ''}>
                    <NumberInput callback={props.updateStartName}
                                 value={props.startValue}>
                        start value:</NumberInput>
                </div>
                <div className={props.maxValue < 0 ? s.errorInput : ''}>
                    <NumberInput callback={props.updateMaxName}
                                 value={props.maxValue}>
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
