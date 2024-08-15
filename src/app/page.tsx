import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewsSection from '../components/home/NewsSection';

import CTA from '../components/home/CTA';
import FloatingButton from '../components/home/FloatingButton';
import BenefitsAccordion from '../components/home/BenefitsAccordion';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsAccordion />
      {/* <FeaturedProducts /> */}
      {/* <NewsSection />      */}
      <CTA />
      <FloatingButton />   
    </div>
  );
}
