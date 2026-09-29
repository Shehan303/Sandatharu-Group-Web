import TravelsLayout from '../components/TravelsLayout';
import Hero from '../sections/Hero';
import JourneyFinder from '../sections/JourneyFinder';
import Intro from '../sections/Intro';
import WhyUs from '../sections/WhyUs';
import Destinations from '../sections/Destinations';
import Experiences from '../sections/Experiences';
import VehicleShowcase from '../components/VehicleShowcase';
import Services from '../sections/Services';
import Tours from '../sections/Tours';
import CustomJourney from '../sections/CustomJourney';
import Responsible from '../sections/Responsible';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

export default function TravelsHome() {
  return (
    <TravelsLayout>
      <Hero />
      <JourneyFinder />
      <Intro />
      <WhyUs />
      <Destinations />
      <Experiences />
      <VehicleShowcase />   {/* ⭐ GAME */}
      <Services />
      <Tours />
      <CustomJourney />
      <Responsible />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </TravelsLayout>
  );
}