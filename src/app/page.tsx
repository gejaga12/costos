import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewsSection from '../components/home/NewsSection';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import FloatingButton from '../components/home/FloatingButton';
import BenefitsAccordion from '../components/home/BenefitsAccordion';
import Footer from '../components/home/Footer';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsAccordion />
      <FeaturedProducts />
      <NewsSection />
      <Testimonials />
      <CTA />
      <FloatingButton />
      <Footer />
    </div>
  );
}
