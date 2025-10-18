import HeroSection from '@/components/sections/hero';
import PackagesSection from '@/components/sections/packages';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
