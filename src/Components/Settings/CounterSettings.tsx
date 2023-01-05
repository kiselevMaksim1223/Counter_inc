import s from "./CounterSettings.module.css"
import {Button} from "../Button/Button";
import React, {useRef} from "react";

export type CounterSettingsPropType = {
    setSettings: (startValue:number, maxValue:number) => void
}

export const CounterSettings = (props:CounterSettingsPropType) => {

    let refStartValue = useRef<HTMLInputElement>(null)
    let refMaxtValue = useRef<HTMLInputElement>(null)

    const onClickSetSettingsHandler = () => {
        if (refMaxtValue.current && refStartValue.current){
            props.setSettings(+refStartValue.current.value, +refMaxtValue.current.value)
        }

        if (refStartValue.current){
            console.log(typeof +refStartValue.current.value)
        }
    }


    return (
        <div className={s.settingsWrapper}>

            <div className={s.settingsData}>
                <div>
                    <div>Start value</div>
                    <input ref={refStartValue} type={"number"} className={s.input} max={99}/>
                </div>
                <div>
                    <div>Max value value</div>
                    <input ref={refMaxtValue} type={"number"} className={s.input} max={99}/>
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
