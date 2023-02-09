import {counterStateType} from "../../App";
import {
    countReducer,
    countReducerIncAT,
    countReducerResAT,
    countReducerSetAT,
    setCounterErrorAT
} from "./counter-reducer";

let counterState:counterStateType

beforeEach(() =>{
    counterState = {
        startValueCount: {
            startValue: 0,
            count: 0
        },
        maxValueCount: 5,
        counterError: false
    }})

test("count should increment on 1", () => {

    const action:countReducerIncAT = {type:"INCREMENT"}

    const endState = countReducer(counterState, action)

    expect(endState.startValueCount.count).toBe(1)
    expect(endState.startValueCount).not.toBe(counterState.startValueCount)
})

test("count should reset to start value", () => {

    const action:countReducerResAT = {type:"RESET"}

    const endState = countReducer(counterState, action)

    expect(endState.startValueCount.count).toBe(0)
    expect(endState.startValueCount).not.toBe(counterState.startValueCount)
    expect(endState.startValueCount.startValue).toBe(counterState.startValueCount.startValue)
})

test("count should set settings", () => {

    const action:countReducerSetAT = {type:"SET-SETTINGS",startValue:5, maxValue: 10}

    const endState = countReducer(counterState, action)

    expect(endState.startValueCount.count).toBe(5)
    expect(endState.startValueCount.startValue).toBe(5)
    expect(endState.startValueCount.startValue).not.toBe(counterState.startValueCount.startValue)
    expect(endState.maxValueCount).toBe(10)
})


test("count should error", () => {

    const action:setCounterErrorAT = {type:"COUNTER-ERROR",startValue:5, maxValue: 3}

    const endState = countReducer(counterState, action)

    expect(endState.counterError).toBe(true)
    expect(counterState.counterError).toBe(false)
})

