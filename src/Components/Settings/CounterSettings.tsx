import s from "./CounterSettings.module.css"
import {Button} from "../Button/Button";
import React, {ChangeEvent, useState} from "react";

export type CounterSettingsPropType = {
    maxValueCount: number
    startValueCount: number
    setSettingsCallBack: (startValue: number, maxValue: number) => void
}

export const CounterSettings = (props: CounterSettingsPropType) => {

    //для начального отображения значений в инпуте
    const [startValue, setStartValue] = useState<number>(props.startValueCount)
    const [maxValue, setMaxValue] = useState<number>(props.maxValueCount)
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)

    const onClickSetSettingsHandler = () => {
        props.setSettingsCallBack(startValue, maxValue)
        setButtonDisable(true)
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number((e.currentTarget.value).replace(/[.]/g,"")))
        setButtonDisable(false)
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number((e.currentTarget.value).replace(/[.]/g,"")))
        setButtonDisable(false)
    }

    const settingsButtonClassName = buttonDisable ? s.disabled : s.default

    return (
        <div className={s.settingsWrapper}>

            <div className={s.settingsData}>
                <div>
                    <div>Start value</div>
                    <input
                        value={startValue}
                        onChange={onChangeStartHandler}
                        type={"number"}
                        className={s.input}
                        max={99}
                    />
                </div>
                <div>
                    <div>Max value value</div>
                    <input
                        value={maxValue}
                        onChange={onChangeMaxHandler}
                        type={"number"}
                        className={s.input}
                        max={99}
                    />
                </div>
            </div>

            <div className={s.buttons}>

                <Button
                    callBack={onClickSetSettingsHandler}
                    buttonClassName={settingsButtonClassName}
                    disabled={buttonDisable}
                >
                    Set
                </Button>

            </div>
        </div>
    )
}
