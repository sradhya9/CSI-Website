import React from 'react';
import '../styles/About.css';
import Particles from '../reactbits/Particles';
import BorderGlow from '../reactbits/BorderGlow';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={1000}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
      <div className="about-container">

        {/* Title Section */}
        <div className="about-header-section">
          <div className="about-title-wrapper">
            <div className="title-left">
              <div className="know-more">
                <span>K</span><span>N</span><span>O</span><span>W</span>
                <span className="spacer"></span>
                <span>M</span><span>O</span><span>R</span><span>E</span>
              </div>
              <div className="about-text">ABOUT</div>
            </div>
            <div className="title-right">
              <div className="csi-text">CSI</div>
              <div className="mbcet-text">MBCET</div>
            </div>
          </div>
          <p className="about-description">
            The Computer Society of India (CSI) Student Branch at Mar Baselios College of Engineering & Technology (MBCET) is a dynamic community committed to nurturing student interest and development in Computer Science and related disciplines. Founded on 24<sup>th</sup> September 2004, we are proud to be the largest and most active student branch in Kerala.
          </p>
        </div>

        {/* Cards Section */}
        <div className="about-cards-section">

          {/* Card 1 */}
          <BorderGlow className="about-card" backgroundColor="rgba(10, 10, 20, 0.6)" glowColor="234 100 50" colors={['#001AFF', '#000009', '#FFFFFF']} fillOpacity={0}>
            <h2 className="card-title">
              <div>OUR</div>
              <div>MISSION</div>
            </h2>
            <ul className="card-list">
              <li>Facilitating knowledge distribution through workshops, seminars, and expert-led lectures.</li>
              <li>Promoting the development of practical skills through coding competitions, hackathons, and hands-on training sessions.</li>
              <li>Creating opportunities for peer interaction and collaboration through diverse events and activities.</li>
              <li>Bridging the gap between academia and industry by fostering connections between students and industry professionals.</li>
              <li>Enhancing the IT landscape in Kerala by cultivating a culture of innovation and excellence.</li>
            </ul>
          </BorderGlow>

          {/* Card 2 */}
          <BorderGlow className="about-card" backgroundColor="rgba(10, 10, 20, 0.6)" glowColor="234 100 50" colors={['#001AFF', '#4DA6FF', '#FFFFFF']} fillOpacity={0}>
            <h2 className="card-title">
              <div>WHAT WE</div>
              <div>STAND FOR</div>
            </h2>
            <ul className="card-list">
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Inclusivity</li>
              <li>Empowerment</li>
              <li>Knowledge Sharing</li>
            </ul>
          </BorderGlow>

          {/* Card 3 */}
          <BorderGlow className="about-card" backgroundColor="rgba(10, 10, 20, 0.6)" glowColor="234 100 50" colors={['#001AFF', '#4DA6FF', '#FFFFFF']} fillOpacity={0}>
            <h2 className="card-title">
              <div>WHY</div>
              <div>JOIN CSI</div>
            </h2>
            <ul className="card-list">
              <li>Our team is composed of dedicated students and faculty advisors who work together to deliver impactful programs and initiatives.</li>
              <li>Joining the CSI Student Branch provides opportunities to participate in events, access workshops, and connect with peers and professionals in the field.</li>
              <li>We encourage all students interested in computer science and technology to join CSI and gain a network of like-minded individuals.</li>
            </ul>
          </BorderGlow>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
