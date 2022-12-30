import React, {useState} from "react";
import {Button} from "./Components/Button/Button";
import s from "./Counter.module.css"

type PropsType = {
    count: number
    countValue: () => void
    ResetValue: () => void
}


export const Counter = (props: PropsType) => {

    const onClickCountHandler = () => {
        props.countValue()
    }

    const onClickResetHandler = () => {
        props.ResetValue()
    }


    return (
        <div className={s.counterWrapper}>

            <div className={`${s.counter} ${props.count === 5 && s.counterRed}`}>
                <div className={s.textCount}>{props.count}</div>
            </div>

            <div className={s.buttons}>

                <Button disabled={props.count === 5 && true}
                        callBack={onClickCountHandler}
                        buttonClassName={props.count === 5 ? s.disabled : s.default}
                >
                    Count
                </Button>

                <Button
                    disabled={props.count === 0 && true}
                    callBack={onClickResetHandler}
                    buttonClassName={props.count === 0 ? s.disabled : s.default}
                >
                    Reset
                </Button>

            </div>
        </div>
    )
}