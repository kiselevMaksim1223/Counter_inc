import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettings} from "./Components/Settings/CounterSettings";


function App() {

    let [startValueCount, setStartValueCount] = useState(0)
    let [maxValueCount, setMaxValueCount] = useState(5)

    let [count, setCount] = useState<number>(startValueCount)

    useEffect(() =>setCount(startValueCount), [startValueCount])

    const countValue = () => {
        setCount(count + 1)
    }

    const ResetValue = () => {
        setCount(startValueCount)
    }

    const setSettings = (startValue:number, maxValue:number) => {
        setStartValueCount(startValue)
        setMaxValueCount(maxValue)
    }

    return (
        <div className={s.App}>

            <CounterSettings
                setSettings = {setSettings}
            />

            <Counter
                count={count}
                countValue={countValue}
                ResetValue={ResetValue}
                startValueCount = {startValueCount}
                maxValueCount = {maxValueCount}
            />


        </div>
    );
}

export default App;
