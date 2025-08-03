import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import StudyDestinations from './components/StudyDestinations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import StudyAustralia from './pages/StudyAustralia';
import StudyJapan from './pages/StudyJapan';
import StudyUK from './pages/StudyUK';
import StudyNewZealand from './pages/StudyNewZealand';
import StudyUS from './pages/StudyUS';
import StudyCanada from './pages/StudyCanada';
import SuccessStories from './pages/SuccessStories';
import Stats from './components/Stats';

// Study Guide Pages
import StudyGuideAustralia from './pages/StudyGuideAustralia';
import StudyGuideJapan from './pages/StudyGuideJapan';
import StudyGuideUK from './pages/StudyGuideUK';
import StudyGuideNewZealand from './pages/StudyGuideNewZealand';
import StudyGuideUSA from './pages/StudyGuideUSA';
import StudyGuideCanada from './pages/StudyGuideCanada';

// Colleges Pages
import CollegesAustralia from './pages/CollegesAustralia';
import CollegesJapan from './pages/CollegesJapan';
import CollegesUK from './pages/CollegesUK';
import CollegesNewZealand from './pages/CollegesNewZealand';
import CollegesUSA from './pages/CollegesUSA';
import CollegesCanada from './pages/CollegesCanada';

// Universities Pages
import UniversitiesAustralia from './pages/UniversitiesAustralia';
import UniversitiesJapan from './pages/UniversitiesJapan';
import UniversitiesUK from './pages/UniversitiesUK';
import UniversitiesNewZealand from './pages/UniversitiesNewZealand';
import UniversitiesUSA from './pages/UniversitiesUSA';
import UniversitiesCanada from './pages/UniversitiesCanada';

// Eligibility Pages
import EligibilityAustralia from './pages/EligibilityAustralia';
import EligibilityJapan from './pages/EligibilityJapan';
import EligibilityUK from './pages/EligibilityUK';
import EligibilityNewZealand from './pages/EligibilityNewZealand';
import EligibilityUSA from './pages/EligibilityUSA';
import EligibilityCanada from './pages/EligibilityCanada';

const Home = () => (
  <div className="page">
    <Carousel />
    <StudyDestinations />
    <Stats />
    <ContactForm />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Country Pages */}
          <Route path="/study/australia" element={<StudyAustralia />} />
          <Route path="/study/japan" element={<StudyJapan />} />
          <Route path="/study/uk" element={<StudyUK />} />
          <Route path="/study/new-zealand" element={<StudyNewZealand />} />
          <Route path="/study/united-states" element={<StudyUS />} />
          <Route path="/study/canada" element={<StudyCanada />} />

          {/* Study Guide Pages */}
          <Route path="/study-guide/australia" element={<StudyGuideAustralia />} />
          <Route path="/study-guide/japan" element={<StudyGuideJapan />} />
          <Route path="/study-guide/uk" element={<StudyGuideUK />} />
          <Route path="/study-guide/new-zealand" element={<StudyGuideNewZealand />} />
          <Route path="/study-guide/united-states" element={<StudyGuideUSA />} />
          <Route path="/study-guide/canada" element={<StudyGuideCanada />} />

          {/* Colleges Pages */}
          <Route path="/colleges/australia" element={<CollegesAustralia />} />
          <Route path="/colleges/japan" element={<CollegesJapan />} />
          <Route path="/colleges/uk" element={<CollegesUK />} />
          <Route path="/colleges/new-zealand" element={<CollegesNewZealand />} />
          <Route path="/colleges/united-states" element={<CollegesUSA />} />
          <Route path="/colleges/canada" element={<CollegesCanada />} />

          {/* Universities Pages */}
          <Route path="/universities/australia" element={<UniversitiesAustralia />} />
          <Route path="/universities/japan" element={<UniversitiesJapan />} />
          <Route path="/universities/uk" element={<UniversitiesUK />} />
          <Route path="/universities/new-zealand" element={<UniversitiesNewZealand />} />
          <Route path="/universities/united-states" element={<UniversitiesUSA />} />
          <Route path="/universities/canada" element={<UniversitiesCanada />} />

          {/* Eligibility Pages */}
          <Route path="/eligibility/australia" element={<EligibilityAustralia />} />
          <Route path="/eligibility/japan" element={<EligibilityJapan />} />
          <Route path="/eligibility/uk" element={<EligibilityUK />} />
          <Route path="/eligibility/new-zealand" element={<EligibilityNewZealand />} />
          <Route path="/eligibility/united-states" element={<EligibilityUSA />} />
          <Route path="/eligibility/canada" element={<EligibilityCanada />} />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
