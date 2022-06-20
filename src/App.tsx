import React, {useState} from 'react';
import './App.css';
import {ClickCounter} from "./Components/ClickCounter";

function App() {
    const start = 0;
    const max = 5;

    const [counts, setCounts] = useState<number>(start)
    const increaseCount = () => {
        counts !== max && setCounts(counts + 1)
    }
    const resetCount = () => {
        setCounts(start)
    }

    return (
        <div>
            <ClickCounter increaseCount={increaseCount}
                          resetCount={resetCount}
                          counts={counts}
                          max={max}
                          start={start}/>
        </div>
    );
}

export default App;
