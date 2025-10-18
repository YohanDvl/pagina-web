"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/logo';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const { toast } = useToast();

  const handleServiceAreaCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const zipCode = formData.get('zipcode');
    const serviceableZips = ['12345', '54321', '98765']; // Example zip codes

    if (typeof zipCode === 'string' && serviceableZips.includes(zipCode)) {
      toast({
        title: '¡Buenas noticias!',
        description: 'Estamos disponibles en tu área.',
      });
    } else {
      toast({
        title: 'Lo sentimos',
        description: 'Actualmente no ofrecemos servicio en tu área, pero estamos expandiéndonos.',
        variant: 'destructive',
      });
    }
  };

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-primary" />
            <span className="font-headline text-lg font-bold">Multy Soluciones Moica</span>
          </Link>
          <p className="text-sm text-muted-foreground">Transformando tu hogar, un espacio a la vez.</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#"><Twitter className="w-5 h-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#"><Instagram className="w-5 h-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#"><Facebook className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-headline font-semibold">Navegación</h4>
          <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground">Servicios</Link>
          <Link href="/#galeria" className="text-sm text-muted-foreground hover:text-foreground">Galería</Link>
          <Link href="/servicios#testimonios" className="text-sm text-muted-foreground hover:text-foreground">Testimonios</Link>
          <Link href="/#contacto" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-headline font-semibold">Legal</h4>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Términos de Servicio</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidad</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-headline font-semibold">Verificar Área de Servicio</h4>
          <form className="flex flex-col gap-2" onSubmit={handleServiceAreaCheck}>
            <Label htmlFor="zipcode" className="sr-only">Código Postal</Label>
            <Input id="zipcode" name="zipcode" type="text" placeholder="Tu código postal" className="bg-background" />
            <Button type="submit">Verificar</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Multy Soluciones Moica. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
