type Props = {
    text: string
    image?: string
}

export function Button(props: Props) {
    const {text, image} = props
    return(
        <button className="w-30 h-20 bg-white">{text}
        <img src={image}/>
        </button>
    )
}