import React from 'react';
import './App.css';
import {ClickCounter} from "./Components/ClickCounter";
import Setting from "./Components/Setting";
import s from '../src/Components/ClickCounter.module.css'
import {AppRootStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {
    incCountsAC,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC,
} from "./redux/CountsReducer";

function App() {
    const dispatch = useDispatch();
    const counts = useSelector<AppRootStateType, number>(state => state.counts.count);
    const startValue = useSelector<AppRootStateType, number>(state => state.counts.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counts.maxValue)
    const message = useSelector<AppRootStateType, string>(state => state.counts.message);

    const updateStartValue = (value: number) => {
        dispatch(setStartValueAC(value));
    };
    const updateMaxName = (value: number) => {
        dispatch(setMaxValueAC(value));
    };
    const setData = () => {
        dispatch(resetCountAC())
    }
    const increaseCount = () => {
        dispatch(incCountsAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC());
    }

    const setDisabled = (startValue || maxValue) < 0 || startValue === maxValue || startValue > maxValue;

    return (
        <div className={s.counterWindow}>
            <div>
                <Setting startValue={startValue}
                         maxValue={maxValue}
                         setData={setData}
                         updateStartName={updateStartValue}
                         updateMaxName={updateMaxName}
                         disabled={setDisabled}/>
            </div>
            <div>
                <ClickCounter increaseCount={increaseCount}
                              resetCount={resetCount}
                              counts={counts}
                              maxValue={maxValue}
                              startValue={startValue}
                              message={message}/>
            </div>
        </div>
    );
}

export default App;
