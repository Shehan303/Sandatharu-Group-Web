import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import OurStory from '../components/OurStory';
import BusinessPanels from '../components/BusinessPanels';
import ThreeDirections from '../components/ThreeDirections';
import ClientsMarquee from '../components/ClientsMarquee';
import ValuesGrid from '../components/ValuesGrid';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <OurStory />
      <BusinessPanels />
      <ThreeDirections />
      <ClientsMarquee />
      <ValuesGrid />
      <CtaBanner />
    </>
  );
}