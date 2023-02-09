import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type PropsType = {
    count: number
    startValueCount: number
    maxValueCount: number
    counterError: boolean

    countValueCallBack: () => void
    ResetValueCallBack: () => void
}

export const Counter = (props: PropsType) => {

    // callBack, className, disable for count button
    const onClickCountHandler = () => {
        props.countValueCallBack()
    }

    // функиция дизейбла кнопок для сокращения кода
    const ButtonDisCreator = (value: number) => {
        return (
            (props.count === value
                || props.counterError
                || props.startValueCount > 99
                || props.maxValueCount > 99)
            && true
        )
    }
    // функиция класснейма кнопок для сокращения кода
    const ButtonClassNameCreator = (value:number) => {
        return (
            (props.count === value
                || props.counterError
                || props.startValueCount > 99
                || props.maxValueCount > 99)
            ? s.disabled
            : s.default
        )
    }

    const ButtonCountDisable = ButtonDisCreator(props.maxValueCount)

    const ButtonCountClassname = ButtonClassNameCreator(props.maxValueCount)

    // callBack, className, disable fo reset button
    const onClickResetHandler = () => {
        props.ResetValueCallBack()
    }

    const ButtonResetDisable = ButtonDisCreator(props.startValueCount)

    const ButtonResetClassname = ButtonClassNameCreator(props.startValueCount)

    const endCountClassname = !props.counterError && props.count === props.maxValueCount && s.counterRed

    return (
        <div className={s.counterWrapper}>

            <div className={`${s.counter} ${endCountClassname}`}>
                {props.counterError
                    ? <div className={s.error}> Error! Incorrect value </div>
                    : (props.startValueCount > 99 || props.maxValueCount > 99)
                        ?
                        <div className={s.errorValue}> Start value and max value should be less or equal then 99 </div>
                        : <div className={`${s.textCount} ${endCountClassname}`}>{props.count}</div>}
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