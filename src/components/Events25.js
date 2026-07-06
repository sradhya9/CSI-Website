import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Events.css';

const events = [
    {
        id: 'lensmaster25',
        title: 'Lensmaster',
        date: '10 – 31 DECEMBER 2025',
        description: 'Held from 10 - 31 Dec 2025, this state-level online photography competition invited students to showcase their visual storytelling skills and creative vision by submitting their best photographic works for a christmas challenge.',
        align: 'left',
    },
    {
        id: 'powerbi',
        title: 'Power BI Workshop',
        date: '10 – 12 DECEMBER 2025',
        description: 'A three-day online workshop from 10 - 12 Dec 2025, led by Ms. Aruna Roy and Ms. Avina Varghese, on data visualization using Power BI.',
        align: 'right',
    },
    {
        id: 'figma',
        title: 'Engineering 101 – Intro to Figma',
        date: '11 OCTOBER 2025',
        description: 'A comprehensive hands-on UI/UX design workshop held on 11 Oct 2025, featuring industry experts Mr. Faizan Ahamed and Mr. Shahin Sadath from QBurst.',
        align: 'left',
    },
    {
        id: 'radiance2',
        title: 'Radiance 2.0',
        date: '13 SEPTEMBER 2025',
        description: 'Held on 13 Sept 2025, CSI SB MBCET successfully hosted Radiance 2.0 on 13th September 2025, the much-awaited fresher’s flagship event, welcoming over 55 enthusiastic first-year participants.',
        align: 'right',
    },
    {
        id: 'decode25',
        title: 'DeCode\'25 : Debug & Conquer',
        date: '09 AUGUST 2025',
        description: 'A fast-paced online coding and debugging competition on 09 Aug 2025, designed to test students\' logical and problem-solving skills.',
        align: 'left',
    },
    {
        id: 'tutorial2',
        title: 'Prompt Engineering for Summarizing Semantic Graphs using AI',
        date: '09 AUGUST 2025',
        description: 'A specialized technical session on 09 Aug 2025 by Ms. Sarada Balachandran Sumadevi, covering prompt engineering for summarizing semantic graphs.',
        align: 'right',
    },
    {
        id: 'tutorial1',
        title: 'AI in Healthcare Delivery',
        date: '07 AUGUST 2025',
        description: 'An advanced technical tutorial on 07 Aug 2025, led by Dr. Jeemon Panniyammakal, exploring the integration of AI in modern healthcare systems.',
        align: 'left',
    },
    {
        id: 'ecocanvas',
        title: 'EcoCanvas : Canvas of Change, Colors of Hope',
        date: '05 JUNE 2025',
        description: 'A creative digital art and design contest organized on 05 Jun 2025, for World Environment Day to promote ecological awareness.',
        align: 'right',
    },
    {
        id: 'projectexpo25',
        title: 'Project Expo’25 : Dream | Build | Inspire',
        date: '01 APRIL 2025',
        description: 'A premier project exhibition on 01 Apr 2025, evaluated by technical leaders Mr. Praveen P and Mr. Bhadran V K, showcasing innovative student projects.',
        align: 'left',
    },
    {
        id: 'influenceai',
        title: 'Motivational Talk Session : Influence of AI in IT Industries',
        date: '28 MARCH 2025',
        description: 'An industry panel on 28 Mar 2025 featuring Ms. Vidhya R C, Mr. Joseph Alex, Mr. Arun Thomas, and Mr. Roy M J, discussing the impact of AI in IT.',
        align: 'right',
    },
    {
        id: 'thunkable',
        title: 'Engineering 101 – Thunkable Workshop',
        date: '22 MARCH 2025',
        description: 'A hands-on mobile application development workshop held on 22 Mar 2025, led by Mr. Kiran Biju, using the Thunkable platform.',
        align: 'left',
    },
    {
        id: 'theoreticalcs',
        title: 'Motivational Talk Session: Exploring Theoretical Computer Science',
        date: '07 MARCH 2025',
        description: 'An inspiring talk on 07 Mar 2025 by Dr. Ashwin Jacob and Dr. Renjith P, exploring foundational concepts and research in Theoretical Computer Science.',
        align: 'right',
    },
    {
        id: 'agm25',
        title: 'CSI SB MBCET Annual General Body Meeting',
        date: '07 MARCH 2025',
        description: 'The annual general meeting of the CSI Student Branch held on 07 Mar 2025, reviewing the year\'s milestones and laying out future plans.',
        align: 'left',
    },
    {
        id: 'knackit2',
        title: 'KnackIt – Episode 2: LinkedIn Optimized',
        date: '22 FEBRUARY 2025',
        description: 'An interactive workshop held on 22 Feb 2025, led by Ms. Kesia Mary Joies, focused on leveraging LinkedIn for professional branding and networking.',
        align: 'right',
    },
    {
        id: 'encrypt',
        title: <>Encrypt – Ctrl <span style={{ fontFamily: 'sans-serif' }}>+</span> Alt <span style={{ fontFamily: 'sans-serif' }}>+</span> Secure</>,
        date: '28 JANUARY 2025',
        description: 'A thrilling college-level cybersecurity quiz competition held on 28 Jan 2025, designed to test and enhance students\' knowledge of digital security.',
        align: 'left',
    },
    {
        id: 'unrealengine',
        title: 'Engineering 101 – Game Development Workshop : Intro to Unreal Engine',
        date: '18 JANUARY 2025',
        description: 'A hands-on offline workshop on 18 Jan 2025, led by Mr. Sabal Krishna S, introducing students to the fundamentals of game development using Unreal Engine.',
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