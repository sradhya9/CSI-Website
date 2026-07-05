import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { eventsData } from "../data/eventsData";

const EventDetails = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    
    // Find event data based on ID, or handle not found
    const event = eventsData[eventId];
    
    const backgroundImage = "/assets/bgeventpage.png"; // make sure this image is in /public/assets
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    if (!event) {
        return (
            <div className="event-details-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: 'white' }}>
                <h2>Event Not Found</h2>
                <button onClick={() => navigate('/events')} style={{ marginLeft: '20px', padding: '10px 20px', cursor: 'pointer' }}>Go Back</button>
            </div>
        );
    }

    return (
        <div
            className="event-details-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >
            <div className="event-content-wrapper">
                <div className="event-image_event" data-aos="fade-right">
                    <img
                        src={event.image}
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">{event.title}</h1>
                        {event.registrationLink && (
                            <button 
                                className="register-button" 
                                data-aos="fade-left"
                                onClick={() => window.open(event.registrationLink, '_blank', 'noopener,noreferrer')}
                            >
                                Register Now
                            </button>
                        )}
                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        {event.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
