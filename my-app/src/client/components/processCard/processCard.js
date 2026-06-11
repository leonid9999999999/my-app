import "./processCard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProcessCard = ({ title, text, image, alt, imageStyle  }) => {
  return (
    <div className="process-card">
      <div className="image-wrapper" style={imageStyle }>
        <LazyLoadImage loading="lazy" src={image} alt={alt} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ProcessCard;