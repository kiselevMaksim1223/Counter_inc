import s from "./CounterSettings.module.css"
import {Button} from "../Button/Button";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";

export type CounterSettingsPropType = {
    maxValueCount:number
    startValueCount:number
    // setSettings: () => void
    setSettings: (startValue:number, maxValue:number) => void
    setStartValueCount:(start:number) => void
    setMaxValueCount:(max:number) => void
    settingsError:boolean
    setSettingsError: (error:boolean) => void
}

export const CounterSettings = (props:CounterSettingsPropType) => {

    let refStartValue = useRef<HTMLInputElement>(null)
    let refMaxValue = useRef<HTMLInputElement>(null)


    useEffect(() => {setStartValue(props.startValueCount)}, [props.startValueCount])
    useEffect(() => {setMaxValue(props.maxValueCount)}, [props.maxValueCount])

    //для начального отображения значений в инпуте
    let [startValue, setStartValue] = useState(props.startValueCount)
    let [maxValue, setMaxValue] = useState(props.maxValueCount)



    const onClickSetSettingsHandler = () => {
        // props.setSettings()
        if (refMaxValue.current && refStartValue.current){
            props.setSettings(+refStartValue.current.value, +refMaxValue.current.value)
        }

    }



    const onChangeStartHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        props.settingsError && props.setSettingsError(false)
    }
    const onChangeMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        props.settingsError && props.setSettingsError(false)
    }

    const settingsButtonClassName = props.settingsError ? s.disabled : s.default

    return (
        <div className={s.settingsWrapper}>

            <div className={s.settingsData}>
                <div>
                    <div>Start value</div>
                    <input value={startValue} ref={refStartValue} type={"number"} className={s.input} onChange={onChangeStartHandler} max={99}/>
                </div>
                <div>
                    <div>Max value value</div>
                    <input value={maxValue} ref={refMaxValue} type={"number"} className={s.input} onChange={onChangeMaxHandler} max={99}/>
                </div>
            </div>

            <div className={s.buttons}>

                <Button
                    callBack={onClickSetSettingsHandler}
                    buttonClassName={settingsButtonClassName}
                    disabled={props.settingsError}
                >
                    Set
                </Button>


            </div>

        </div>

    )
}
