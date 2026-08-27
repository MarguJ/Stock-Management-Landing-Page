type Props = {
    placeHolder: string
}

export function Input(props: Props) {
    const {placeHolder} = props
    return(
        <input className="w-30 h-20 bg-white" placeholder={placeHolder}></input>
    )
}