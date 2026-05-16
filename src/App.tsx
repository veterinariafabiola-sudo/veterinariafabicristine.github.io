import { motion } from 'framer-motion';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Differentials } from './components/Differentials';
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F7F8] text-slate-900">
      <NavBar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
