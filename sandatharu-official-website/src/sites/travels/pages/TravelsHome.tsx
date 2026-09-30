import TravelsLayout from '../components/TravelsLayout';
import Hero from '../sections/Hero';
import VehicleSearch from '../sections/VehicleSearch';
import TrustBadges from '../sections/TrustBadges';
import VehicleShowcase from '../components/VehicleShowcase';
import PopularVehicles from '../sections/PopularVehicles';
import WhyUs from '../sections/WhyUs';
import Destinations from '../sections/Destinations';
import Services from '../sections/Services';
import Tours from '../sections/Tours';
import CustomJourney from '../sections/CustomJourney';
import Responsible from '../sections/Responsible';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';

export default function TravelsHome() {
  return (
    <TravelsLayout>
      <Hero />
      <VehicleSearch />
      <TrustBadges />
      <VehicleShowcase />
      <PopularVehicles />
      <WhyUs />
      <Destinations />
      <Services />
      <Tours />
      <CustomJourney />
      <Responsible />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </TravelsLayout>
  );
}