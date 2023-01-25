import {counterStateType} from "../../App";


export type countReducerIncAT = {
    type: "INCREMENT"
}
export type countReducerResAT = {
    type: "RESET"
}
export type countReducerSetAT = {
    type: "SET-SETTINGS"
    startValue: number
    maxValue: number
}

export type setCounterErrorAT = {
    type: "COUNTER-ERROR"
    startValue: number
    maxValue: number
}
export type ActionType = countReducerIncAT | countReducerResAT | countReducerSetAT | setCounterErrorAT

export const countReducer = (countState: counterStateType, action: ActionType): counterStateType => {
    switch (action.type) {

        case "INCREMENT":
            return ({
                ...countState,
                startValueCount: {...countState.startValueCount, count: countState.startValueCount.count + 1}
            })

        case "RESET":
            return ({
                ...countState,
                startValueCount: {...countState.startValueCount, count: countState.startValueCount.startValue}
            })

        case "SET-SETTINGS":
            return {
                ...countState,
                startValueCount: {
                    ...countState.startValueCount,
                    startValue: action.startValue,
                    count: action.startValue
                },
                maxValueCount: action.maxValue
            }

        case "COUNTER-ERROR":
            if (action.startValue >= action.maxValue) {
                return {...countState, counterError: true}
            } else {
                return {...countState, counterError: false}
            }

        default:
            return countState
    }
}