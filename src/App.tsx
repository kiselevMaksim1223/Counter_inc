import React, {useReducer} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettings} from "./Components/Settings/CounterSettings";
import {countReducer} from "./Components/counterReducer/counter-reducer";


type startValueType = {
    startValue: number
    count:number
}
export type counterStateType = {
    startValueCount: startValueType
    maxValueCount: number
    settingsError:boolean
    counterError:boolean
}

export const initialCounterState:counterStateType = {
    startValueCount:{
        startValue: 0,
        count:0
    },
    maxValueCount:5,
    settingsError:false,
    counterError:false
}

function App() {

    const [counterState, dispatch] = useReducer(countReducer, initialCounterState)
    const count = counterState.startValueCount.count
    // let [startValueCount, setStartValueCount] = useState<number>(0)
    // let [maxValueCount, setMaxValueCount] = useState<number>(5)
    // let [count, setCount] = useState<number>(startValueCount)
    // let [settingsError, setSettingsError] = useState<boolean>(false)
    // const [counterError, setCounterError] = useState<boolean>(false)
    // useEffect(() => setCount(startValueCount), [startValueCount])
    // useEffect(() => {(localStorage.setItem("startValue", JSON.stringify(startValueCount)))}, [startValueCount])
    // useEffect(() => {localStorage.setItem("maxValue", JSON.stringify(maxValueCount))}, [maxValueCount])
    // useEffect(() => {
    //     let startValueLocalStorage = localStorage.getItem("startValue")
    //     startValueLocalStorage && setStartValueCount(JSON.parse(startValueLocalStorage))
    // }, [])
    //
    // useEffect(() => {
    //     let startValueLocalStorage = localStorage.getItem("maxValue")
    //     startValueLocalStorage && setMaxValueCount(JSON.parse(startValueLocalStorage))
    // }, [])
    // useEffect(() => setCountButtonDisable(true), [settingsError])
    // useEffect(() => setError(true) ,[])
    // const countValue = () => {
    //     setCount(count + 1)
    // }
    // const ResetValue = () => {
    //     setCount(startValueCount)
    // }
    // const setSettings = (startValue:number, maxValue:number) => {
    //     //здесь мы сетаем ошибку(даже не ошибку а дизейбл для кнопки) для окна настроек
    //         startValue >= maxValue
    //             ? (setSettingsError(true))
    //             : setStartValueCount(startValue)
    //               setMaxValueCount(maxValue)
    //     //здесь мы сетаем ошибку для окна счечика
    //         startValue < maxValue
    //             ? setCounterError(false)
    //             : setCounterError(true)
    //
    //
    //     localStorage.setItem("startValue", JSON.stringify(startValue))
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    // }

    const countValue = () => {
        dispatch({type:"INCREMENT"})
    }
    const ResetValue = () => {
        dispatch({type:"RESET"})
    }

    const setSettings = (startValue:number, maxValue:number) => {
        dispatch({type:"SET-SETTINGS",startValue:startValue, maxValue:maxValue})
    }



    return (
        <div className={s.App}>

            <CounterSettings
                settingsError={counterState.settingsError}
                // setSettingsErrorCalBackStart={setSettingsErrorCalBackStart}
                // setSettingsErrorCalBackMax={setSettingsErrorCalBackMax}
                startValueCount = {counterState.startValueCount.startValue}
                maxValueCount = {counterState.maxValueCount}
                setSettingsCallBack= {setSettings}
                // setStartValueCount ={setStartValueCount}
                // setMaxValueCount = {setMaxValueCount}
            />

            <Counter
                count={count}
                countValueCallBack={countValue}
                ResetValueCallBack={ResetValue}
                startValueCount = {counterState.startValueCount.startValue}
                maxValueCount = {counterState.maxValueCount}
                settingsError= {counterState.settingsError}
                counterError= {counterState.counterError}
            />
        </div>
    );
}

export default App;
