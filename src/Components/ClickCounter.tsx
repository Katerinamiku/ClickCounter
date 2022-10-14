import s from './ClickCounter.module.css'
import {Button} from "./Button";

type ClickCounterPropsType = {
    increaseCount: () => void
    resetCount: () => void
    counts: number
    maxValue: number
    startValue: number
    message: string
}

export const ClickCounter = (props: ClickCounterPropsType) => {
    const increaseDisabled = props.counts === props.maxValue
    const resetDisabled = props.counts === props.startValue

    const classes = (props.counts === props.maxValue && props.maxValue !== 0) ? s.limit : '';
    const errorMessage = (props.message !== '' ? s.errorMessage : '')

    return (
        <div className={s.clickCounter}>
            <div
                className={`${s.counter} ${classes} ${errorMessage}`}>
                {props.message !== '' ? props.message : props.counts}
            </div>
            <Button
                disabled={increaseDisabled}
                name={'inc'}
                callBack={props.increaseCount}/>

            <Button
                disabled={resetDisabled}
                name={'reset'}
                callBack={props.resetCount}/>
        </div>
    );
};

