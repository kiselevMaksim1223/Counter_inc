import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type PropsType = {
    count: number
    startValueCount: number
    maxValueCount: number
    settingsError:boolean
    counterError:boolean

    countValueCallBack: () => void
    ResetValueCallBack: () => void
}


export const Counter = (props: PropsType) => {

    const onClickCountHandler = () => {
        props.countValueCallBack()
    }

    const ButtonCountDisable =
        props.count === props.maxValueCount
        || props.counterError
        || props.startValueCount > 99
        || props.maxValueCount > 99
        && true
    // const ButtonCountDisable = props.count === props.maxValueCount && buttonDisable
    const ButtonCountClassname =
        props.count === props.maxValueCount
        || props.counterError
        || props.startValueCount > 99
        || props.maxValueCount > 99
            ? s.disabled
            : s.default

    const onClickResetHandler = () => {
        props.ResetValueCallBack()
    }
    const ButtonResetDisable =
        props.count === props.startValueCount
        || props.counterError
        || props.startValueCount > 99
        || props.maxValueCount > 99
        && true
    const ButtonResetClassname =
        props.count === props.startValueCount
        || props.counterError
        || props.startValueCount > 99
        || props.maxValueCount > 99
            ? s.disabled
            : s.default

    const endCountClassname = !props.counterError && props.count === props.maxValueCount && s.counterRed

    return (
        <div className={s.counterWrapper}>

            <div className={`${s.counter} ${endCountClassname}`}>
            {/*<div className = {endCountClassname}>*/}
                {props.counterError
                    ? <div className={s.error}> Error! Incorrect value </div>
                    :props.startValueCount > 99 || props.maxValueCount > 99
                    ? <div className={s.errorValue}> Start value and max value should be less or equal then 99  </div>
                    : <div className={`${s.textCount} ${endCountClassname}`}>{props.count}</div> }
            </div>

            <div className={s.buttons}>

                <Button
                        disabled={ButtonCountDisable}
                        callBack={onClickCountHandler}
                        buttonClassName={ButtonCountClassname}
                >
                    Count
                </Button>

                <Button
                    disabled={ButtonResetDisable}
                    callBack={onClickResetHandler}
                    buttonClassName={ButtonResetClassname}
                >
                    Reset
                </Button>

            </div>
        </div>
    )
}