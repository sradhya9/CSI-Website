import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const words = ["CSI SB MBCET", "RENOVATING", "REINTRODUCING", "REIMAGINING"];

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 800); // Increased timeout to 800ms for a smoother, longer animation
    }, 4000); // Change text every 4 seconds to give more time for the beautiful animation

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="csi-hero">
      <div className={`csi-hero-content ${fade ? 'fade-in' : 'fade-out'}`}>
        <h1 className="csi-text-layer csi-text-blue">{words[index]}</h1>
        <h1 className="csi-text-layer csi-text-white">{words[index]}</h1>
        <h1 className="csi-text-layer csi-text-darkblue">{words[index]}</h1>
      </div>

      <div className="csi-hero-tagline-container">
        <div className="csi-hero-divider">
          <div className="csi-hero-hexagon"></div>
        </div>
        <p className="csi-hero-tagline">CONNECT &bull; COLLABORATE &bull; GROW</p>
      </div>

      {/* Building Background Image at the bottom */}
      <div className="csi-building-bg"></div>

      <div className="csi-hero-footer">
        <div className="csi-hero-explore">
          <span>EXPLORE</span>
          <div className="csi-explore-arrows">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#003BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 14L12 20L18 14" stroke="#003BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;