import "./button.css"


export default function Button(props) {

        const {
            type,
            link,
            onClick,
            text,
            style,
            wrapStyle,
            // type = 'button',
            target = '_blank' 
        } = props;
        return (
            <button type={type} onClick={onClick} style={style}className="ButtonWrap">
                <span>{text}</span>
            </button>

        )
    
}
