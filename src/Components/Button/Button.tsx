type ButtonPropsType = {
    callBack: () => void
    children: string
    disabled?:boolean
    buttonClassName?:string

}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} onClick={onClickHandler} className={props.buttonClassName}>{props.children}</button>
    )
}