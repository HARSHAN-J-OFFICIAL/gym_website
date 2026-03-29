import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import SectionCTA from './components/SectionCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Transformations />
      <Trainers />
      <Pricing />
      <Testimonials />
      <SectionCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
