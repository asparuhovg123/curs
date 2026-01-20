import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
