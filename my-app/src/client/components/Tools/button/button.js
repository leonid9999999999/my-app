import "./button.css"


export default function Button(props) {

        const {
            type,
            onClick,
            text,
            style,
        } = props;
        return (
            <button type={type} onClick={onClick} style={style}className="ButtonWrap">
                <span>{text}</span>
            </button>

        )
    
}
