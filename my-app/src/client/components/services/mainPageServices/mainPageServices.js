import "./mainPageServices.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import servicesData from "../../../data/services/services.json";
import ProjectCard from "../../services/projectCard/projectCard.js";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary.js";
import Spinner from "../../spinner/Spinner.js"; 

function MainPageServices(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    function Page(item) {

        const ourServicesInfo = item.ourServicesInfo || [];
        const safeSliderImages = item.sliderImages || [];
        console.log("sections    ", item.ourServicesInfo[0].sections)
        navigate(`/ourservices/${item.id}`,
            {
                state: {
                    item:item,
                    ourServicesInfo: ourServicesInfo,
                    sliderImages: safeSliderImages
                }
            });

    }
    useEffect(() => {
        // simulate async fetch with setTimeout
        const timer = setTimeout(() => {
            setProjects(servicesData);
            setLoading(false);
        }, 900); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="spinnerWrapper">
                <Spinner />
            </div>
        );
    }

    return(
        <div id="services" className="ourServices">
            <div className="ourServicesWrapper">
                <h2 className="ourServiceTitle">Selected Work</h2>

                <p className="ourServiceSubtitle">
                    Recent projects delivered for businesses across the UK and Europe.
                </p>

                <div className="ourServiceGrid">
                    {projects.map((project) => (
                        // <OneSelectionCard
                        //   key={project.id} // Important: Always include a unique key
                        //   tag={project.tag}
                        //   title={project.title}
                        //   text={project.text}
                        //   image={project.mainImage}
                        // />
                        <ErrorBoundary><ProjectCard
                            onClick={() => Page(project)}
                            styleh3={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: 'white' }}
                            styelep={{ fontSize: 14, lineHeight: 1.6, color: "#94a3b8" }}
                            key={project.id} // Important: Always include a unique key
                            tag={project.tag}
                            title={project.title}
                            text={project.text}
                            image={project.mainImage}
                        />
                        </ErrorBoundary>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default MainPageServices