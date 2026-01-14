import "./processCard.css";

const ProcessCard = ({ title, text, image, alt, imageStyle  }) => {
  return (
    <div className="process-card">
      <div className="image-wrapper" style={imageStyle }>
        <img src={image} alt={alt} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ProcessCard;