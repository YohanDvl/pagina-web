"use client";

import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function Footer() {

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex flex-col items-center md:items-start gap-2">
            <Logo className="w-20 h-20" />
            <span className="font-headline text-xl font-bold">Multy Soluciones Moica</span>
          </Link>
          <p className="text-sm text-muted-foreground">Diseño que transforma, calidad que perdura.</p>
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
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Multy Soluciones Moica. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
