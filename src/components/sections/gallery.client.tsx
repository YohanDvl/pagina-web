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
import type { GalleryItem } from '@/lib/gallery.server';

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-12">
      {items.map((item) => (
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
  );
}
