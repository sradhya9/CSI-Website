import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Events.css';

const events = [
    {
        id: 'knackit1',
        title: 'KnackIt – Episode 1: Build Your Resume',
        date: '19 DECEMBER 2024',
        description:
            'A practical skill-building session held on 19 Dec 2024, led by Ms. Varsha Renjith, focused on crafting impactful resumes to help students stand out to recruiters.',
        align: 'left',
    },
    {
        id: 'lensmaster24',
        title: 'LensMaster\'24',
        date: '01 DECEMBER 2024',
        description:
            'A state-level creative photography and visual arts competition held on 01 Dec 2024, celebrating student talent and artistic expression.',
        align: 'right',
    },
    {
        id: 'softwaretesting',
        title: 'Software Testing – An Industrial Approach',
        date: '09 NOVEMBER 2024',
        description:
            'An industry-focused workshop on software testing methodologies, tools, and industrial practices led by Ms. Shalini L, an Associate Consultant at Infosys on 09th November 2024.',
        align: 'left',
    },
    {
        id: 'highered',
        title: 'Higher Education Prospects',
        date: '31 JULY 2024',
        description:
            'Held on 31 Jul 2024, this was an insightful session on higher education opportunities featuring expert guidance from Mr. Aswin P Chandran and Dr. Jayaram V.',
        align: 'right',
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