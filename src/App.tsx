import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettings} from "./Components/Settings/CounterSettings";


function App() {

    let [startValueCount, setStartValueCount] = useState<number>(0)
    let [maxValueCount, setMaxValueCount] = useState<number>(10)
    let [count, setCount] = useState<number>(startValueCount)

    let [error, setError] = useState<boolean>(false)

     //
    useEffect(() => setCount(startValueCount), [startValueCount])
    // useEffect(() => setError(true) ,[])

    const countValue = () => {
        setCount(count + 1)
    }

    const ResetValue = () => {
        setCount(startValueCount)
    }

    const setSettings = (startValue:number, maxValue:number) => {
        startValue >= maxValue
            ? setError(true)
            : setStartValueCount(startValue)
              setMaxValueCount(maxValue)
    }

    return (
        <div className={s.App}>

            <CounterSettings
                error ={error}
                setError={setError}
                maxValueCount = {maxValueCount}
                setSettings = {setSettings}
                setStartValueCount ={setStartValueCount}
                setMaxValueCount = {setMaxValueCount}
            />

            <Counter
                count={count}
                countValue={countValue}
                ResetValue={ResetValue}
                startValueCount = {startValueCount}
                maxValueCount = {maxValueCount}
                error = {error}
            />
        </div>
    );
}

export default App;
