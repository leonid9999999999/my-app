import './singlePortfolio.css'

function SinglePortfolio({ image, title, siteUrl }){
    return(
        
            <div className="portfolio-card">
                <div className="portfolio-image-wrapper">
                    <img src={image} alt={title} className="portfolio-image" />

                    <a
                        href={siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-site-btn"
                    >
                        View Site
                    </a>
                </div>

                <h3 className="portfolio-title">{title}</h3>
            </div>
        
    );
}

export default SinglePortfolio