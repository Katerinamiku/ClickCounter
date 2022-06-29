import s from './ClickCounter.module.css'
import {Button} from "./Button";

type ClickCounterPropsType = {
    increaseCount: () => void
    resetCount: () => void
    counts: number
    maxValue: number
    startValue: number
    messageChange:boolean
    message: string
}

export const ClickCounter = (props: ClickCounterPropsType) => {
    const increaseDisabled = props.counts === props.maxValue
    const resetDisabled = props.counts === props.startValue

    let message;

    if(props.messageChange){
        message = props.message
    }else if(props.messageChange){
        message = props.messageChange
    }

    const classes = (props.counts === props.maxValue) ? s.limit : '';
    const errorMessage = s.errorMessage

    return (
        <div className={s.clickCounter}>
            <div
                className={`${s.counter} ${!props.message ? classes : errorMessage}`}>
                {message ? message : props.counts }
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

