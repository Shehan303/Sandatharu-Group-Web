import Hero from '../sections/Hero';
import MarqueeStrip from '../sections/MarqueeStrip';
import Intro from '../sections/Intro';
import StoryRail from '../sections/StoryRail';
import Businesses from '../sections/Businesses';
import WhyGrid from '../sections/WhyGrid';
import Network from '../sections/Network';
import MarqueeRow from '../sections/MarqueeRow';
import Sustainability from '../sections/Sustainability';
import SriLanka from '../sections/SriLanka';
import Process from '../sections/Process';
import Values from '../sections/Values';
import Future from '../sections/Future';
import News from '../sections/News';
import Gallery from '../sections/Gallery';
import SocialCTA from '../sections/SocialCTA';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />              {/* 03 Cinematic hero */}
      <MarqueeStrip />      {/* 04 Marquee band */}
      <Intro />             {/* 05 Who is Sandatharu */}
      <StoryRail />         {/* 06–07 Our Story */}
      <Businesses />        {/* 08 Business cards (sticky stack) */}
      <WhyGrid />           {/* 09 Why Sandatharu */}
      <Network />           {/* 10 Network */}
      <MarqueeRow variant="clients" />   {/* 11 Clients */}
      <MarqueeRow variant="partners" />  {/* 12 Partners */}
      <Sustainability />    {/* 13 Sustainability */}
      <SriLanka />          {/* 14 Sri Lanka → World */}
      <Process />           {/* 15 How we work */}
      <Values />            {/* 16 Values */}
      <Future />            {/* 17 Future vision */}
      <News />              {/* 18 News */}
      <Gallery />           {/* 19 Gallery */}
      <SocialCTA />         {/* 20 Social */}
      <Contact />           {/* 21–22 Work with us + contact */}
      <FinalCTA />          {/* 23 Final CTA before footer */}
    </>
  );
}