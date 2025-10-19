"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
// TODO: Los datos de la galería son estáticos. Conectar a una base de datos (como Firestore) para gestionar los proyectos dinámicamente.
import { galleryItems } from '@/lib/data';

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nuestros Proyectos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora nuestra galería de antes y después. Cada proyecto es un testimonio de nuestra dedicación a la calidad y la transformación de espacios.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-12">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={item.after.imageUrl}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={item.after.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
                  <DialogDescription>{item.description}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h3 className="font-semibold text-center mb-2 font-headline">Antes</h3>
                    <div className="relative aspect-video rounded-md overflow-hidden border">
                      <Image
                        src={item.before.imageUrl}
                        alt={`Antes - ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="object-cover"
                        data-ai-hint={item.before.imageHint}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-center mb-2 font-headline">Después</h3>
                    <div className="relative aspect-video rounded-md overflow-hidden border-2 border-primary">
                      <Image
                        src={item.after.imageUrl}
                        alt={`Después - ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="object-cover"
                        data-ai-hint={item.after.imageHint}
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
