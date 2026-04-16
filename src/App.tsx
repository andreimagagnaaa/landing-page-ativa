import React from 'react';
import { Element } from 'react-scroll';

// Sections (we will create these next)
import Hero from './components/sections/Hero';
import Difference from './components/sections/Difference';
import Theses from './components/sections/Theses';
import About from './components/sections/About';
import ProductSEG from './components/sections/ProductSEG';
import Methodology from './components/sections/Methodology';
import Pillars from './components/sections/Pillars';
import Areas from './components/sections/Areas';
import Solutions from './components/sections/Solutions';
import ChecklistLeadMagnet from './components/sections/ChecklistLeadMagnet';
import PartnershipMV from './components/sections/PartnershipMV';
import Cases from './components/sections/Cases';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import Header from './components/ui/Header';
import WhatsAppButton from './components/ui/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      
      <main>
        <Element name="hero"><Hero /></Element>
        <Element name="difference"><Difference /></Element>
        <Element name="theses"><Theses /></Element>
        <Element name="about"><About /></Element>
        <Element name="seg"><ProductSEG /></Element>
        <Element name="methodology"><Methodology /></Element>
        <Element name="pillars"><Pillars /></Element>
        <Element name="areas"><Areas /></Element>
        <Element name="solutions"><Solutions /></Element>
        <Element name="checklist"><ChecklistLeadMagnet /></Element>
        <Element name="partnership"><PartnershipMV /></Element>
        <Element name="cases"><Cases /></Element>
        <Element name="faq"><FAQ /></Element>
        <Element name="final-cta"><FinalCTA /></Element>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;