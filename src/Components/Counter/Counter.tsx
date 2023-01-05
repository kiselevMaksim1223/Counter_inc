import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type PropsType = {
    count: number
    startValueCount: number
    maxValueCount: number
    error:boolean

    countValue: () => void
    ResetValue: () => void
}


export const Counter = (props: PropsType) => {

    const onClickCountHandler = () => {
        props.countValue()
    }
    const ButtonCountDisable = props.count === props.maxValueCount && true
    const ButtonCountClassname = props.count === props.maxValueCount ? s.disabled : s.default

    const onClickResetHandler = () => {
        props.ResetValue()
    }
    const ButtonResetDisable = props.count === props.startValueCount && true
    const ButtonResetClassname = props.count === props.startValueCount ? s.disabled : s.default

    const endCountClassname = props.count === props.maxValueCount && s.counterRed

    return (
        <div className={s.counterWrapper}>

            <div className={`${s.counter} ${endCountClassname}`}>
            {/*<div className = {endCountClassname}>*/}
                {props.error
                    ? <div className={s.error}> Error! Incorrect value </div>
                    : <div className={`${s.textCount} ${endCountClassname}`}>{props.count}</div> }
            </div>

            <div className={s.buttons}>

                <Button disabled={ButtonCountDisable}
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