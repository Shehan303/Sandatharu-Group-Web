import CocoLayout from '../components/CocoLayout';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import WhatWeDo from '../sections/WhatWeDo';
import Products from '../sections/Products';
import Process from '../sections/Process';
import Quality from '../sections/Quality';
import Sustainability from '../sections/Sustainability';
import Partners from '../sections/Partners';
import Global from '../sections/Global';
import Operations from '../sections/Operations';
import News from '../sections/News';
import Inquiry from '../sections/Inquiry';
import FinalCTA from '../sections/FinalCTA';

export default function CocoHome() {
  return (
    <CocoLayout>
      <Hero />
      <Intro />
      <WhatWeDo />
      <Products />
      <Process />
      <Quality />
      <Sustainability />
      <Partners />
      <Global />
      <Operations />
      <News />
      
      <FinalCTA />
      <Inquiry />
    </CocoLayout>
  );
}