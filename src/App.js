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
import MainAboutUs from "./components/MainAboutUs";
import ContactUs from "./components/ContactUs";
import Team24 from "./components/Team24";
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
          <Route path="/about" element={<MainAboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/team24" element={<Team24 />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
