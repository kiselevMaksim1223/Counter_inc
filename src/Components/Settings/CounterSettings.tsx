import s from "./CounterSettings.module.css"
import {Button} from "../Button/Button";
import React, {ChangeEvent, useRef, useState} from "react";

export type CounterSettingsPropType = {
    maxValueCount:number
    setSettings: (startValue:number, maxValue:number) => void
    setStartValueCount:(start:number) => void
    setMaxValueCount:(max:number) => void
    error:boolean
    setError: (error:boolean) => void
}

export const CounterSettings = (props:CounterSettingsPropType) => {

    let refStartValue = useRef<HTMLInputElement>(null)
    let refMaxValue = useRef<HTMLInputElement>(null)
    // let [startValue, setStartValue] = useState(0)
    // let [maxValue, setMaxValue] = useState(props.maxValueCount)


    const onClickSetSettingsHandler = () => {
        if (refMaxValue.current && refStartValue.current){
            props.setSettings(+refStartValue.current.value, +refMaxValue.current.value)
        }

        // if (refStartValue.current){
        //     console.log(typeof +refStartValue.current.value)
        // }
    }

    // const onClickSetSettingsHandler = () => {
    //         props.setSettings(startValue, maxValue)
    // }

    // const onChangeStartHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setStartValue(+e.currentTarget.value)
    // }
    // const onChangeMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setMaxValue(+e.currentTarget.value)
    // }

    const onChangeInputHandler = () => {
        props.error && props.setError(false)
    }

    return (
        <div className={s.settingsWrapper}>

            <div className={s.settingsData}>
                <div>
                    <div>Start value</div>
                    <input ref={refStartValue} type={"number"} className={s.input} max={99} onChange={onChangeInputHandler}/>
                    {/*<input value={startValue} onChange={onChangeStartHandler} type={"number"} className={s.input} max={99}/>*/}
                </div>
                <div>
                    <div>Max value value</div>
                    <input ref={refMaxValue} type={"number"} className={s.input} max={99} onChange={onChangeInputHandler}/>
                    {/*<input value={maxValue} onChange={onChangeMaxHandler} type={"number"} className={s.input} max={99}/>*/}
                </div>
            </div>

            <div className={s.buttons}>

                <Button
                    callBack={onClickSetSettingsHandler}
                    buttonClassName={s.default}
                >
                    Set
                </Button>


            </div>

        </div>

    )
}
