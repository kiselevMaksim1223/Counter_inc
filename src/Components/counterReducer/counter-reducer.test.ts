import {counterStateType} from "../../App";
import {countReducer, countReducerIncAT, countReducerResAT, countReducerSetAT} from "./counter-reducer";


test("count should increment on 1", () => {

    const counterState:counterStateType = {
        startValueCount:{
            startValue: 0,
            count:0
        },
        maxValueCount:5,
        settingsError:false,
        counterError:false
    }

    const action:countReducerIncAT = {type:"INCREMENT"}

    const endState = countReducer(counterState, action)

    expect(endState.startValueCount.count).toBe(1)
    expect(endState.startValueCount).not.toBe(counterState.startValueCount)
})

test("count should reset to start value", () => {

    const counterState:counterStateType = {
        startValueCount:{
            startValue: 0,
            count:4
        },
        maxValueCount:5,
        settingsError:false,
        counterError:false
    }

    const action:countReducerResAT = {type:"RESET"}

    const endState = countReducer(counterState, action)

    expect(endState.startValueCount.count).toBe(0)
    expect(endState.startValueCount).not.toBe(counterState.startValueCount)
    expect(endState.startValueCount.startValue).toBe(counterState.startValueCount.startValue)
})

test("count should settings error", () => {

    const counterState:counterStateType = {
        startValueCount:{
            startValue: 0,
            count:0
        },
        maxValueCount:5,
        settingsError:false,
        counterError:false
    }

    const action:countReducerSetAT = {type:"SET-SETTINGS",startValue:5, maxValue: 4}

    const endState = countReducer(counterState, action)

    expect(endState.settingsError).toBe(true)
    expect(endState.settingsError).not.toBe(counterState.settingsError)
    expect(endState.startValueCount.startValue).toBe(counterState.startValueCount.startValue)
})

test("count should set settings", () => {

    const counterState:counterStateType = {
        startValueCount:{
            startValue: 0,
            count:0
        },
        maxValueCount:5,
        settingsError:false,
        counterError:false
    }

    const action:countReducerSetAT = {type:"SET-SETTINGS",startValue:5, maxValue: 10}

    const endState = countReducer(counterState, action)

    expect(endState.settingsError).toBe(false)
    expect(endState.startValueCount.count).toBe(0)
    expect(endState.startValueCount.startValue).toBe(5)
    expect(endState.startValueCount.startValue).not.toBe(counterState.startValueCount.startValue)
    expect(endState.maxValueCount).toBe(10)

})