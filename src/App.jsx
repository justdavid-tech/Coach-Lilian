import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import JoinClass from "./pages/join-class";
import Programs from "./pages/programs";
import Testimonies from "./pages/testimonies";
import ScrollToTop from "./components/scrolltotop";
import InsightsPage from "./pages/insightspage";
import ArticlePage from "./pages/articlepage";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsOfService from "./pages/termsofservice";

// Aos Configuration
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Start fade-out slightly before unmounting so the transition is visible
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const hideTimer = setTimeout(() => setLoading(false), 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  // Refresh AOS when route changes
  useEffect(() => {
    AOS.refresh();
  }, [location]); // Runs whenever the route changes

  if (loading) {
    return (
      <div style={{ opacity: fadeOut ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-class" element={<JoinClass />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/insightspage" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </>
  )
}

export default App

// I Added AOS for the animations. Where useLocation
// I also imported "aos/dist/aos.css";
