import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettings} from "./Components/Settings/CounterSettings";


function App() {

    let [startValueCount, setStartValueCount] = useState<number>(0)
    let [maxValueCount, setMaxValueCount] = useState<number>(5)

    let [count, setCount] = useState<number>(startValueCount)

    let [settingsError, setSettingsError] = useState<boolean>(false)

    const [counterError, setCounterError] = useState<boolean>(false)


    useEffect(() => setCount(startValueCount), [startValueCount])

    // useEffect(() => {(localStorage.setItem("startValue", JSON.stringify(startValueCount)))}, [startValueCount])
    // useEffect(() => {localStorage.setItem("maxValue", JSON.stringify(maxValueCount))}, [maxValueCount])

    useEffect(() => {
        let startValueLocalStorage = localStorage.getItem("startValue")
        startValueLocalStorage && setStartValueCount(JSON.parse(startValueLocalStorage))
    }, [])

    useEffect(() => {
        let startValueLocalStorage = localStorage.getItem("maxValue")
        startValueLocalStorage && setMaxValueCount(JSON.parse(startValueLocalStorage))
    }, [])


    // useEffect(() => setCountButtonDisable(true), [settingsError])
    // useEffect(() => setError(true) ,[])

    const countValue = () => {
        setCount(count + 1)
    }

    const ResetValue = () => {
        setCount(startValueCount)
    }

    const setSettings = (startValue:number, maxValue:number) => {


        //здесь мы сетаем ошибку(даже не ошибку а дизейбл для кнопки) для окна настроек
            startValue >= maxValue
                ? (setSettingsError(true))
                : setStartValueCount(startValue)
            setMaxValueCount(maxValue)

        //здесь мы сетаем ошибку для окна счечика
            startValue < maxValue
                ? setCounterError(false)
                : setCounterError(true)


        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    return (
        <div className={s.App}>

            <CounterSettings
                settingsError={settingsError}
                setSettingsError={setSettingsError}
                startValueCount = {startValueCount}
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
                settingsError= {settingsError}
                counterError= {counterError}
            />
        </div>
    );
}

export default App;
