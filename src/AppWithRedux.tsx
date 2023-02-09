import React from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettings} from "./Components/Settings/CounterSettings";
import {
    countReducerIncAC,
    countReducerResAC,
    countReducerSetAC, setCounterErrorAC
} from "./Components/counterReducer/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Components/Redux/Store";

type startValueType = {
    startValue: number
    count:number
}

export type counterStateType = {
    startValueCount: startValueType
    maxValueCount: number
    counterError:boolean
}

function AppWithRedux() {

    const counterState = useSelector<AppRootStateType, counterStateType>(state => state.counterState)
    const dispatch = useDispatch()

    const countValue = () => {
        dispatch(countReducerIncAC())
    }

    const ResetValue = () => {
        dispatch(countReducerResAC())
    }

    const setSettings = (startValue:number, maxValue:number) => {
        dispatch(countReducerSetAC(startValue, maxValue))
        dispatch(setCounterErrorAC(startValue, maxValue))
    }

    return (
        <div className={s.App}>

            <CounterSettings
                startValueCount = {counterState.startValueCount.startValue}
                maxValueCount = {counterState.maxValueCount}
                setSettingsCallBack= {setSettings}
            />
            <Counter
                count={counterState.startValueCount.count}
                countValueCallBack={countValue}
                ResetValueCallBack={ResetValue}
                startValueCount = {counterState.startValueCount.startValue}
                maxValueCount = {counterState.maxValueCount}
                counterError= {counterState.counterError}
            />
        </div>
    );
}

export default AppWithRedux;
