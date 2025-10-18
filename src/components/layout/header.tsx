"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Paintbrush, ImageIcon, MessageSquare } from 'lucide-react';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/servicios', label: 'Servicios', icon: Paintbrush },
  { href: '/#galeria', label: 'Galería', icon: ImageIcon },
  { href: '/servicios#testimonios', label: 'Testimonios', icon: MessageSquare },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">Multy Soluciones Moica</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/#contacto">Agenda una Consulta</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-6">
                  <Link href="/" className="flex items-center gap-2">
                     <Logo className="w-8 h-8 text-primary" />
                     <span className="font-bold font-headline">Multy Soluciones Moica</span>
                  </Link>
                  <nav className="grid gap-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className="flex items-center gap-3 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                          <link.icon className="h-5 w-5" />
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
