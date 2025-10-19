import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = placeholderImages.find(p => p.id === 'hero');

  return (
    <section className="relative w-full h-[75vh] min-h-[480px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Transformando tu Hogar, un Espacio a la Vez
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            En Multy Soluciones Moica, convertimos tus sueños de remodelación en una realidad tangible con diseño experto y construcción de calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="#contacto">Agenda una Consulta</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
