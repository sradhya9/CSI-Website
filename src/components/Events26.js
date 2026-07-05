import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Events.css';

const events = [
    {
        id: 'beyond',
        title: 'Beyond the Draft',
        date: '29 JUNE 2026',
        description:
            'Beyond the Draft: A Guide to Effective Research Paper Writing, an online workshop organized by CSI SB MBCET, equipped students with essential research writing, IEEE formatting, and publication skills.',
        align: 'left',
    },
    {
        id: 'miniproject',
        title: 'Mini Project Expo',
        date: '27 APRIL 2026',
        description:
            'Mini Project Expo 2026, organized by CSI SB MBCET, the Department of Computer Science & Engineering, and ACE MBCET, showcased innovative student projects, fostering creativity, technical excellence, and industry interaction.',
        align: 'right',
    },
    {
        id: 'techexhibition',
        title: 'Tech Exhibition',
        date: '10 APRIL 2026',
        description:
            'Tech Exhibition 2026, the final year project expo organized by CSI SB MBCET, the Department of Computer Science & Engineering, and ACE MBCET, showcased innovative projects with expert industry evaluation.',
        align: 'left',
    },
    {
        id: 'gateway',
        title: 'GATEway to Success',
        date: '31 MARCH 2026',
        description:
            'GATEway to Success, organized by CSI SB MBCET, was an inspiring GATE guidance session that equipped students with effective preparation strategies, practical insights, and motivation for success.',
        align: 'right',
    },
    {
        id: 'wallstreet',
        title: 'Day At WallStreet',
        date: '23 MARCH 2026',
        description:
            'A Day At WallStreet, a trading simulation competition organized by CSI SB MBCET and IEEE SB MBCET, introduced students to stock market trading through an engaging and strategic simulation.',
        align: 'left',
    },
    {
        id: 'herthroughart',
        title: 'Her through Art',
        date: '01 MARCH 2026 - 08 MARCH 2026',
        description:
            'HER Through ART, a poster designing competition organized by CSI SB MBCET for International Women’s Day 2026, empowered students to celebrate women\'s strength, resilience, and equality through impactful artwork.',
        align: 'right',
    },
    {
        id: 'knackit3',
        title: 'GitHub Essentials',
        date: '22 FEBRUARY 2026',
        description:
            'KnackIt Episode 3: GitHub Essentials, organized by CSI SB MBCET, introduced students to Git and GitHub through an interactive, hands-on session, enhancing their version control and collaboration skills.',
        align: 'left',
    },
    {
        id: 'agm26',
        title: 'Annual General Body Meeting',
        date: '29 JANUARY 2026',
        description:
            'The CSI Student Branch Annual General Meeting 2026 reviewed the year\'s achievements, presented financial reports, recognized outgoing Execom members, and announced the new Execom for 2026–27.',
        align: 'right',
    },
    {
        id: 'aiunleashed',
        title: 'AI Unleashed',
        date: 'JANUARY 2026',
        description:
            'Held in January 2026, this multi-faceted online AI technical fest featured specialized sub-events like Neural Canvas, Think Trace, and ScriptShift, designed to provide students with an immersive platform to explore the frontiers of generative AI, logical reasoning, and complex technical problem-solving.',
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
                                        <span className="date-text">
                                            {event.date.includes('-') ? (
                                                <>
                                                    {event.date.split('-')[0]}
                                                    <span style={{ fontFamily: 'sans-serif' }}>-</span>
                                                    {event.date.split('-')[1]}
                                                </>
                                            ) : (
                                                event.date
                                            )}
                                        </span>
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
                                        <span className="date-text">
                                            {event.date.includes('-') ? (
                                                <>
                                                    {event.date.split('-')[0]}
                                                    <span style={{ fontFamily: 'sans-serif' }}>-</span>
                                                    {event.date.split('-')[1]}
                                                </>
                                            ) : (
                                                event.date
                                            )}
                                        </span>
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