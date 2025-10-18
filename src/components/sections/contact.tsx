"use client";

import { Mail, Phone, MapPin } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export default function ContactSection() {
  return (
    <section id="contacto" className="border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ponte en Contacto</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
            ¿Listo para empezar tu próximo proyecto? Contáctanos directamente a través de estos canales.
            </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">WhatsApp</h3>
                        <p className="text-muted-foreground">Envíanos un mensaje para una respuesta rápida.</p>
                        <a href="https://wa.me/573012434775" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Iniciar chat</a>
                    </div>
                </div>
                 <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">Teléfono</h3>
                        <p className="text-muted-foreground">Llámanos para una consulta directa.</p>
                        <a href="tel:+573012434775" className="text-primary font-medium hover:underline">+57 3012434775</a>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">Email</h3>
                        <p className="text-muted-foreground">Envíanos tus preguntas a nuestra dirección de correo.</p>
                        <a href="mailto:multysolucionesmoica@gmail.com" className="text-primary font-medium hover:underline">multysolucionesmoica@gmail.com</a>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">Oficina</h3>
                        <p className="text-muted-foreground">Oficina virtual</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
