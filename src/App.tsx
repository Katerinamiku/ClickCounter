import React, {useEffect, useState} from 'react';
import './App.css';
import {ClickCounter} from "./Components/ClickCounter";
import Setting from "./Components/Setting";
import s from '../src/Components/ClickCounter.module.css'
import {Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {

    const [counts, setCounts] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [message, setMessage] = useState('Enter your start and max values and press SET')
    const [messageChange,setMessageChange] = useState<boolean>(false);

    const updateStartName = (value: number) => {
        if (value < 0) {
            setMessage('Incorrect value!')
            setStartValue(value);
        } else {
            setMessage('Enter your start and max values and press SET')
            setStartValue(value);
        }
        setMessageChange(true)
    };
    const updateMaxName = (value: number) => {
        if (value < 0) {
            setMessage('Incorrect value!')
            setMaxValue(value);
        } else {
            setMessage('Enter your start and max values and press SET')
            setMaxValue(value);
        }
        setMessageChange(true)
    };
    const setData = (disabled: boolean) => {
            setMessageChange(false)
            setCounts(startValue);
            setToLocalStorage(0);
    }

    const increaseCount = () => {
        const value = counts + 1
        counts !== maxValue && setCounts(value)
        setToLocalStorage(value)

    }
    const resetCount = () => {
        setCounts(startValue)
        setToLocalStorage(startValue)
    }

    const setToLocalStorage = (value: number) => {
        localStorage.setItem('counts', JSON.stringify(value))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const getFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counter')
        const start = localStorage.getItem('startValue');
        const max = localStorage.getItem('maxValue')

        if (start && max) {
            setStartValue(JSON.parse(start))
            setMaxValue(JSON.parse(max))
        }
    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setCounts(0)
    }

    useEffect(() => {
        getFromLocalStorage()
    },[])

    const setDisabled = (startValue || maxValue) < 0 || startValue === maxValue || startValue > maxValue;

    return (
        <div className={s.counterWindow}>
            <div>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Setting startValue={startValue}
                                                      maxValue={maxValue}
                                                      setData={setData}
                                                      updateStartName={updateStartName}
                                                      updateMaxName={updateMaxName}
                                                      clearStorage={clearLocalStorage}
                                                      disabled={setDisabled}/>}/>
                    <Route path="/settings" element={<Setting startValue={startValue}
                                                              maxValue={maxValue}
                                                              setData={setData}
                                                              updateStartName={updateStartName}
                                                              updateMaxName={updateMaxName}
                                                              clearStorage={clearLocalStorage}
                                                              disabled={setDisabled}/>}/>
                    <Route path="/counter" element={<ClickCounter increaseCount={increaseCount}
                                                                  resetCount={resetCount}
                                                                  counts={counts}
                                                                  maxValue={maxValue}
                                                                  startValue={startValue}
                                                                  messageChange={messageChange}
                                                                  message={message}/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
