import HeroSection from '../components/home/HeroSection';
import FullScreenAnimation from '../components/home/FullScreenAnimation';
import CTA from '../components/home/CTA';
import FloatingButton from '../components/home/FloatingButton';
import BenefitsAccordion from '../components/home/BenefitsAccordion';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsAccordion />
      <FullScreenAnimation />    
      <CTA />
      <FloatingButton />   
    </div>
  );
}
