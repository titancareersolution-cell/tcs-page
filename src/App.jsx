import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import StudyDestinations from './components/StudyDestinations';
import CardCarousel from './components/CardCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';
import StudyGuideAustralia from './pages/StudyGuideAustralia';
import StudyGuideCanada from './pages/StudyGuideCanada';
import StudyGuideJapan from './pages/StudyGuideJapan';
import StudyGuideNewZealand from './pages/StudyGuideNewZealand';
import StudyGuideUK from './pages/StudyGuideUK';
import StudyGuideUSA from './pages/StudyGuideUSA';


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
              <ContactForm />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/study-guide/australia" element={<StudyGuideAustralia />} />
          <Route path="/study-guide/canada" element={<StudyGuideCanada />} />
          <Route path="/study-guide/japan" element={<StudyGuideJapan />} />
          <Route path="/study-guide/new-zealand" element={<StudyGuideNewZealand />} />
          <Route path="/study-guide/uk" element={<StudyGuideUK />} />
          <Route path="/study-guide/united-states" element={<StudyGuideUSA />} />

        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
