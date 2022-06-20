import s from './ClickCounter.module.css'
import {Button} from "./Button";

type ClickCounterPropsType = {
    increaseCount: () => void
    resetCount: () => void
    counts: number
    max: number
    start: number
}

export const ClickCounter = (props: ClickCounterPropsType) => {
const increaseDisabled = props.counts === props.max
const decreaseDisabled = props.counts === props.start

    return (
        <div>
            <div className={s.clickCounter}>
                <div className={`${s.counter} ${props.counts === props.max ? s.limit : ''}`}>{props.counts}</div>
                <Button
                    disabled={increaseDisabled}
                    name={'inc'}
                    callBack={props.increaseCount}/>

                <Button
                    disabled={decreaseDisabled}
                    name={'reset'}
                    callBack={props.resetCount}/>
            </div>
        </div>
    );
};

