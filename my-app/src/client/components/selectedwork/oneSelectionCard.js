
function OneSelectionCard({tag,title,text,image}){
    return(
        <div className="selected-work__card">
            <div className="selected-work__image">
                {/* IMAGE PLACEHOLDER */}
                <img src={image} alt="imageExample" className="imageSettings"/>
                
            </div>

            <span className="selected-work__tag">{tag}</span>
            <h3 style={{}} className="selected-work__card-title">
               {title}
            </h3>
            <p style={{}} className="selected-work__card-text">
                {text}
            </p>
        </div>
    )
}

export default OneSelectionCard