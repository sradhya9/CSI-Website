import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Events.css';

const events = [
    {
        id: 'adastra',
        title: 'AD ASTRA',
        date: '01 FEBRUARY 2025',
        description:
            'The Department of Computer Science and Engineering, in association with CSI SB MBCET, is organizing Ad Astra, a month-long event aimed at enhancing and building a comprehensive skill set for every participant.',
        align: 'left',
    },
    {
        id: 'software',
        title: 'SOFTWARE',
        date: '09 NOVEMBER 2024',
        description:
            'Department of Computer Science and Engineering in association with CSI SB MBCET & ISTE SB MBCET , Mar Baselios College of Engineering and Technology, Thiruvananthapuram is organising an online workshop - Software Testing, An Industrial Approach',
        align: 'right',
    },
    {
        id: 'radiance',
        title: 'RADIANCE',
        date: '28 SEPTEMBER 2024',
        description:
            'The Department of Computer Science and Engineering in association with CSI SB MBCET, successfully conducted Radiance, an engaging one-day event exclusively for first-year students, featuring interactive sessions, team activities, and networking opportunities.',
        align: 'left',
    },
    {
        id: 'motivational',
        title: 'MOTIVATIONAL',
        date: '23 JUNE 2024',
        description:
            'The Department of Computer Science and Engineering in association with CSI SB MBCET presents a Motivational Talk Session with Dr. Giby Geevarghese, Former Chairperson (2016-2019), Board of Studies in Education (UG), and Former Board of Studies Member (PG) at the University of Kerala.',
        align: 'right',
    },
    {
        id: 'motivational2',
        title: 'MOTIVATIONAL',
        date: '23 JUNE 2024',
        description:
            'The Department of Computer Science and Engineering in association with CSI SB MBCET presents a Motivational Talk Session with Dr. Giby Geevarghese, Former Chairperson (2016-2019), Board of Studies in Education (UG), and Former Board of Studies Member (PG) at the University of Kerala.',
        align: 'left',
    },
];

const CalendarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const EventsPage = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="events-section" id="events">
            <div className="events-header">
                <h1 className="events-title" data-aos="fade-down">
                    EVENTS
                </h1>

                <div
                    className="scroll-indicator"
                    style={{
                        transform: `translateY(${scrollPos * 0.9}px)`,
                        zIndex: 10,
                        position: 'relative',
                    }}
                >
                    <div className="mouse-icon">
                        <div className="mouse-wheel"></div>
                    </div>
                    <span className="scroll-text">Scroll Down</span>
                </div>
            </div>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {events.map((event) => (
                    <div key={event.id} className={`timeline-item ${event.align}`}>
                        {/* Left Column */}
                        <div className="timeline-col left-col">
                            {event.align === 'left' ? (
                                <div className="event-card" data-aos="fade-right">
                                    <h2 className="event-title">{event.title}</h2>
                                    <p className="event-desc">{event.description}</p>
                                    <button className="read-more-btn" onClick={() => navigate(`/event/${event.id}`)}>
                                        Read more <span>→</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="date-card right-align" data-aos="fade-right">
                                    <div className="date-wrapper">
                                        <CalendarIcon />
                                        <span className="date-text">{event.date}</span>
                                    </div>
                                    <div className="dashed-line"></div>
                                </div>
                            )}
                        </div>

                        {/* Center Dot */}
                        <div className="timeline-center" data-aos="zoom-in">
                            <div className="timeline-dot"></div>
                        </div>

                        {/* Right Column */}
                        <div className="timeline-col right-col">
                            {event.align === 'right' ? (
                                <div className="event-card" data-aos="fade-left">
                                    <h2 className="event-title">{event.title}</h2>
                                    <p className="event-desc">{event.description}</p>
                                    <button className="read-more-btn" onClick={() => navigate(`/event/${event.id}`)}>
                                        Read more <span>→</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="date-card left-align" data-aos="fade-left">
                                    <div className="dashed-line"></div>
                                    <div className="date-wrapper">
                                        <CalendarIcon />
                                        <span className="date-text">{event.date}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsPage;