import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import './singlePortfolio.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SinglePortfolio({ image, title, siteUrl, description,onClick }){
    return(
       
            <div className="portfolio-card" onClick={onClick}>
                <div className="portfolio-image-wrapper">
                        <LazyLoadImage loading="lazy" src={image} alt={title} className="portfolio-image" />
                        <Link to={siteUrl} className="view-site-btn">
                            View Site
                        </Link>
                </div>

                <h3 className="portfolio-title">{title}</h3>
                <p className='portDesription'>{description}</p>
            </div>
       
    );
}

export default SinglePortfolio