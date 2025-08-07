import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import StudyDestinations from './components/StudyDestinations';
import CardCarousel from './components/CardCarousel';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';
import StudyAustralia from './pages/StudyAustralia';
import StudyCanada from './pages/StudyCanada';
import StudyJapan from './pages/StudyJapan';
import StudyNewZealand from './pages/StudyNewZealand';
import StudyUK from './pages/StudyUK';
import StudyUS from './pages/StudyUS';
import StudyGuideAustralia from './pages/StudyGuideAustralia';
import StudyGuideCanada from './pages/StudyGuideCanada';
import StudyGuideJapan from './pages/StudyGuideJapan';
import StudyGuideNewZealand from './pages/StudyGuideNewZealand';
import StudyGuideUK from './pages/StudyGuideUK';
import StudyGuideUSA from './pages/StudyGuideUSA';
import EligibilityAustralia from './pages/EligibilityAustralia';
import EligibilityCanada from './pages/EligibilityCanada';
import EligibilityJapan from './pages/EligibilityJapan';
import EligibilityNewZealand from './pages/EligibilityNewZealand';
import EligibilityUK from './pages/EligibilityUK';
import EligibilityUSA from './pages/EligibilityUSA';
import UniversitiesAustralia from './pages/UniversitiesAustralia';
import UniversitiesCanada from './pages/UniversitiesCanada';
import UniversitiesJapan from './pages/UniversitiesJapan';
import UniversitiesNewZealand from './pages/UniversitiesNewZealand';
import UniversitiesUK from './pages/UniversitiesUK';
import UniversitiesUSA from './pages/UniversitiesUSA';
import CollegesAustralia from './pages/CollegesAustralia';
import CollegesCanada from './pages/CollegesCanada';
import CollegesJapan from './pages/CollegesJapan';
import CollegesNewZealand from './pages/CollegesNewZealand';
import CollegesUK from './pages/CollegesUK';
import CollegesUSA from './pages/CollegesUSA';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <StudyDestinations />
              <CardCarousel />
              <Stats />
              <ContactForm />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/study/australia" element={<StudyAustralia />} />
          <Route path="/study/canada" element={<StudyCanada />} />
          <Route path="/study/japan" element={<StudyJapan />} />
          <Route path="/study/new-zealand" element={<StudyNewZealand />} />
          <Route path="/study/uk" element={<StudyUK />} />
          <Route path="/study/united-states" element={<StudyUS />} />
          <Route path="/study-guide/australia" element={<StudyGuideAustralia />} />
          <Route path="/study-guide/canada" element={<StudyGuideCanada />} />
          <Route path="/study-guide/japan" element={<StudyGuideJapan />} />
          <Route path="/study-guide/new-zealand" element={<StudyGuideNewZealand />} />
          <Route path="/study-guide/uk" element={<StudyGuideUK />} />
          <Route path="/study-guide/united-states" element={<StudyGuideUSA />} />
          <Route path="/eligibility/australia" element={<EligibilityAustralia />} />
          <Route path="/eligibility/canada" element={<EligibilityCanada />} />
          <Route path="/eligibility/japan" element={<EligibilityJapan />} />
          <Route path="/eligibility/new-zealand" element={<EligibilityNewZealand />} />
          <Route path="/eligibility/uk" element={<EligibilityUK />} />
          <Route path="/eligibility/united-states" element={<EligibilityUSA />} />
          <Route path="/universities/australia" element={<UniversitiesAustralia />} />
          <Route path="/universities/canada" element={<UniversitiesCanada />} />
          <Route path="/universities/japan" element={<UniversitiesJapan />} />
          <Route path="/universities/new-zealand" element={<UniversitiesNewZealand />} />
          <Route path="/universities/uk" element={<UniversitiesUK />} />
          <Route path="/universities/united-states" element={<UniversitiesUSA />} />
          <Route path="/colleges/australia" element={<CollegesAustralia />} />
          <Route path="/colleges/canada" element={<CollegesCanada />} />
          <Route path="/colleges/japan" element={<CollegesJapan />} />
          <Route path="/colleges/new-zealand" element={<CollegesNewZealand />} />
          <Route path="/colleges/uk" element={<CollegesUK />} />
          <Route path="/colleges/united-states" element={<CollegesUSA />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
