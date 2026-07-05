import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome"; // Updated import
import Events26 from "./components/Events26";
import Events25 from "./components/Events25";
import Events24 from "./components/Events24";
import Team26 from "./components/Team26";
import Team25 from "./components/Team25";
import Software from "./components/Software";
import EcoCanvas from "./components/EcoCanvas"; // EcoCanvas event details
import ProjectExpo25 from "./components/ProjectExpo25"; // Project Expo 2025 event details
import InfluenceofAI from "./components/InfluenceofAI"; // Influence of AI event details
import AGM2025 from "./components/AGM2025"; // AGM 2025 event details
import TheoreticalComputerScience from "./components/TheoreticalComputerScience"; // Theoretical Computer Science event details
import MainAboutUs from "./components/MainAboutUs"; // About Us page
import ContactUs from "./components/ContactUs";
import Team24 from "./components/Team24";
import Encrypt from "./components/Encrypt";
import Thunkable from "./components/Thunkable";
import Gamedev from "./components/Gamedev";
import Linkedin from "./components/Linkedin";
import Resume from "./components/Resume";
import Lensmaster from "./components/Lensmaster";
import Radiance from "./components/Radiance";
import EventDetails from "./components/EventDetails";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Ensures animations happen only once per scroll
    });
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<MainHome />} /> {/* Updated Route */}
          <Route path="/events" element={<Navigate to="/events26" />} />
          <Route path="/events26" element={<Events26 />} />
          <Route path="/events25" element={<Events25 />} />
          <Route path="/events24" element={<Events24 />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/team" element={<Navigate to="/team26" />} />
          <Route path="/team26" element={<Team26 />} />
          <Route path="/team25" element={<Team25 />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<MainAboutUs />} /> {/* Updated Route */}
          <Route path="/contactus" element={<ContactUs />} /> {/* Updated Route */}
          <Route path="/team24" element={<Team24 />} /> {/* Team 2023 page */}
          <Route path="/ecocanvas" element={<EcoCanvas />} /> {/* EcoCanvas event details */}
          <Route path="/projectexpo25" element={<ProjectExpo25 />} /> {/* Project Expo 2025 event details */}
          <Route path="/influenceofai" element={<InfluenceofAI />} /> {/* Influence of AI event details */}
          <Route path="/agm2025" element={<AGM2025 />} /> {/* AGM 2025 event details */}
          <Route path="/theoreticalcomputerscience" element={<TheoreticalComputerScience />} /> {/* Theoretical Computer Science event details */}
          <Route path="/encrypt" element={<Encrypt />} /> {/* Encrypt event details */}
          <Route path="/thunkable" element={<Thunkable />} />
          <Route path="/gamedev" element={<Gamedev />} />
          <Route path="/linkedin" element={<Linkedin />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/lensmaster" element={<Lensmaster />} />
          <Route path="/radiance" element={<Radiance />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
