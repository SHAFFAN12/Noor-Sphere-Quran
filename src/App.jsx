import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import TrialBanner from './components/TrialBanner';
import Events from './components/Events';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Pricing />
      <Testimonials />
      <TrialBanner />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
