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
    counterError:boolean
}

export const initialCounterState:counterStateType = {
    startValueCount:{
        startValue: 0,
        count:0
    },
    maxValueCount:5,
    counterError:false
}

function App() {

    const [counterState, dispatch] = useReducer(countReducer, initialCounterState)
    const count = counterState.startValueCount.count

    const countValue = () => {
        dispatch({type:"INCREMENT"})
    }

    const ResetValue = () => {
        dispatch({type:"RESET"})
    }

    const setSettings = (startValue:number, maxValue:number) => {
        dispatch({type:"SET-SETTINGS",startValue:startValue, maxValue:maxValue})
        dispatch({type:"COUNTER-ERROR", startValue:startValue, maxValue:maxValue})
    }

    return (
        <div className={s.App}>

            <CounterSettings
                startValueCount = {counterState.startValueCount.startValue}
                maxValueCount = {counterState.maxValueCount}
                setSettingsCallBack= {setSettings}
            />
            <Counter
                count={count}
                countValueCallBack={countValue}
                ResetValueCallBack={ResetValue}
                startValueCount = {counterState.startValueCount.startValue}
                maxValueCount = {counterState.maxValueCount}
                counterError= {counterState.counterError}
            />
        </div>
    );
}

export default App;
