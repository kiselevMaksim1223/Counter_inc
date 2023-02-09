import {counterStateType} from "../../App";


export type countReducerIncAT = ReturnType<typeof countReducerIncAC>
export type countReducerResAT = ReturnType<typeof countReducerResAC>
export type countReducerSetAT = ReturnType<typeof countReducerSetAC>
export type setCounterErrorAT = ReturnType<typeof setCounterErrorAC>

export type ActionType = countReducerIncAT | countReducerResAT | countReducerSetAT | setCounterErrorAT

const initialState:counterStateType = {
    startValueCount:{
        startValue: 0,
        count:0
    },
    maxValueCount:5,
    counterError:false
}

export const countReducer = (countState = initialState, action: ActionType): counterStateType => {
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

            return {...countState, counterError: action.startValue >= action.maxValue}
            // return action.startValue >= action.maxValue ? {...countState, counterError: true}
            //
            // if (action.startValue >= action.maxValue) {
            //     return {...countState, counterError: true}
            // } else {
            //     return {...countState, counterError: false}
            // }

        default:
            return countState
    }
}

export const countReducerIncAC = () => ({ type: "INCREMENT"} as const)
export const countReducerResAC = () => ({  type: "RESET"} as const)
export const countReducerSetAC = (startValue: number, maxValue: number) => ({  type: "SET-SETTINGS",startValue, maxValue} as const)
export const setCounterErrorAC = (startValue: number, maxValue: number) => ({  type: "COUNTER-ERROR",startValue, maxValue} as const)
