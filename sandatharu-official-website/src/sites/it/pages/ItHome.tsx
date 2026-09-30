import ITLayout from '../components/ItLayout';
import Hero from '../sections/Hero';
import QuickNav from '../sections/QuickNav';
import TrustBadges from '../sections/TrustBadges';
import Intro from '../sections/Intro';
import Services from '../sections/Services';
import Solutions from '../sections/Solutions';
import Industries from '../sections/Industries';
import Process from '../sections/Process';
import TechStack from '../sections/TechStack';
import Projects from '../sections/Projects';
import Clients from '../sections/Clients';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

export default function ITHome() {
  return (
    <ITLayout>
      <Hero />
      <QuickNav />
      <TrustBadges />
      <Intro />
      <Services />
      <Solutions />
      <Industries />
      <Process />
      <TechStack />
      <Projects />
      <Clients />
      <FAQ />
      <Contact />
      <FinalCTA />
    </ITLayout>
  );
}