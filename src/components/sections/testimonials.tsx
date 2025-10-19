"use client";

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-muted'}`} />
        );
    }
    return stars;
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Lo que Dicen Nuestros Clientes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            La satisfacción de nuestros clientes es nuestra mayor prioridad y nuestro mejor aval.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="pt-6 flex flex-col gap-4">
                        <div className="flex">
                            {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 pt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold font-headline">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
