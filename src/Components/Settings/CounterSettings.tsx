import s from "./CounterSettings.module.css"
import {Button} from "../Button/Button";
import React, {ChangeEvent,useState} from "react";

export type CounterSettingsPropType = {
    maxValueCount:number
    startValueCount:number
    // setSettings: () => void
    setSettingsCallBack: (startValue:number, maxValue:number) => void
    // setStartValueCount:(start:number) => void
    // setMaxValueCount:(max:number) => void
    settingsError:boolean
    // setSettingsErrorCalBack: (error:boolean) => void
    // setSettingsErrorCalBackStart: (startValue:number) => void
    // setSettingsErrorCalBackMax: (maxValue:number) => void
}

export const CounterSettings = (props:CounterSettingsPropType) => {

    // let refStartValue = useRef<HTMLInputElement>(null)
    // let refMaxValue = useRef<HTMLInputElement>(null)


    // useEffect(() => {setStartValue(props.startValueCount)}, [props.startValueCount])
    // useEffect(() => {setMaxValue(props.maxValueCount)}, [props.maxValueCount])

    //для начального отображения значений в инпуте
    let [startValue, setStartValue] = useState<number>(props.startValueCount)
    let [maxValue, setMaxValue] = useState<number>(props.maxValueCount)
    // let [buttonDisable, setButtonDisable] = useState<boolean>(false)


    const onClickSetSettingsHandler = () => {
        // if (refMaxValue.current && refStartValue.current){
            props.setSettingsCallBack(startValue, maxValue)
        // }
    }



    const onChangeStartHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        // props.settingsError && props.setSettingsErrorCalBackStart(+e.currentTarget.value)
    }
    const onChangeMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        // props.settingsError && props.setSettingsErrorCalBackMax(+e.currentTarget.value)
    }


    const settingsButtonClassName = props.settingsError ? s.disabled : s.default

    return (
        <div className={s.settingsWrapper}>

            <div className={s.settingsData}>
                <div>
                    <div>Start value</div>
                    {/*<input value={startValue} ref={refStartValue} type={"number"} className={s.input} onChange={onChangeStartHandler} max={99}/>*/}
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
                    {/*<input value={maxValue} ref={refMaxValue} type={"number"} className={s.input} onChange={onChangeMaxHandler} max={99}/>*/}
                    <input value={maxValue} onChange={onChangeMaxHandler} type={"number"} className={s.input} max={99}/>
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
