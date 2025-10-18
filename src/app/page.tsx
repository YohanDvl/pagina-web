import HeroSection from '@/components/sections/hero';
import PackagesSection from '@/components/sections/packages';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';
import AiDesignerSection from '@/components/sections/ai-designer';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <AiDesignerSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
