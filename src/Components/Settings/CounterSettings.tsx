import s from "./CounterSettings.module.css"
import {Button} from "../Button/Button";
import React, {ChangeEvent, useRef, useState} from "react";

export type CounterSettingsPropType = {
    maxValueCount:number
    startValueCount:number
    // setSettings: () => void
    setSettings: (startValue:number, maxValue:number) => void
    setStartValueCount:(start:number) => void
    setMaxValueCount:(max:number) => void
    error:boolean
    setError: (error:boolean) => void
}

export const CounterSettings = (props:CounterSettingsPropType) => {

    let refStartValue = useRef<HTMLInputElement>(null)
    let refMaxValue = useRef<HTMLInputElement>(null)
    let [startValue, setStartValue] = useState(props.startValueCount)
    let [maxValue, setMaxValue] = useState(props.maxValueCount)



    const onClickSetSettingsHandler = () => {
        // props.setSettings()
        if (refMaxValue.current && refStartValue.current){
            props.setSettings(+refStartValue.current.value, +refMaxValue.current.value)
        }
        // if (refStartValue.current){
        //     console.log(typeof +refStartValue.current.value)
        // }
    }



    const onChangeStartHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        props.error && props.setError(false)
    }
    const onChangeMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        props.error && props.setError(false)
    }

    // const onChangeInputHandler = () => {
        // if (refMaxValue.current && refStartValue.current) {
        //     let startValue = refStartValue.current.value
        //     let maxValue = refMaxValue.current.value
        //
        //     props.setStartValueCount(+startValue)
        //     props.setMaxValueCount(+maxValue)
        // }

    //     props.error && props.setError(false)
    // }

    return (
        <div className={s.settingsWrapper}>

            <div className={s.settingsData}>
                <div>
                    <div>Start value</div>
                    <input value={startValue} ref={refStartValue} type={"number"} className={s.input} max={99} onChange={onChangeStartHandler}/>
                    {/*<input value={startValue} onChange={onChangeStartHandler} type={"number"} className={s.input} max={99}/>*/}
                </div>
                <div>
                    <div>Max value value</div>
                    <input value={maxValue} ref={refMaxValue} type={"number"} className={s.input} max={99} onChange={onChangeMaxHandler}/>
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
