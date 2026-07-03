import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EventCarousel.css";

const events = [
    { id: "software", title: "Software Testing", img: "/assets/software.png" },
    { id: "radiance", title: "Radiance '24", img: "/assets/radiance.png" },
    { id: "motivational", title: "Motivational Talk", img: "/assets/motivational.png" },
];
const EventCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Set Radiance '24 as default (index 1)
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleHover = (index) => {
        if (isAnimating || index === activeIndex) return;
        setActiveIndex(index);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600); // 600ms matches the CSS transition
    };

    const handleClick = (id) => {
        navigate(`/event/${id}`);
    };

    return (
        <div className="carousel-container" id="events">
            {/* Header Image */}
            <div className="carousel-header">
                <img src="/assets/events_bg.png" alt="Event Header" className="carousel-header-image" />
            </div>

            {/* Event Carousel */}
            <div className="custom-carousel">
                {events.map((event, index) => {
                    let position = "right-slide";
                    if (index === activeIndex) {
                        position = "center-slide";
                    } else if (index === (activeIndex - 1 + events.length) % events.length) {
                        position = "left-slide";
                    }

                    return (
                        <div
                            key={index}
                            className={`event_box ${position}`}
                            style={{ backgroundImage: `url(${event.img})` }}
                            onMouseEnter={() => handleHover(index)}
                            onClick={() => handleClick(event.id)}
                        >
                            <h3>{event.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventCarousel;


