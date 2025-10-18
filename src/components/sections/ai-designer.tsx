"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Bot, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/data';

interface AiResponse {
  title: string;
  description: string;
  moodboard: { url: string; hint: string }[];
}

const mockAiResponse: AiResponse = {
  title: "Sugerencia de Diseño: Moderno y Acogedor",
  description: "Basado en tu espacio y preferencias, recomendamos un estilo moderno con toques cálidos. Utiliza una paleta de colores neutros con acentos en madera natural y textiles suaves. La iluminación indirecta creará un ambiente acogedor. Muebles de líneas limpias y funcionales maximizarán el espacio, mientras que plantas de interior añadirán un toque de vida y frescura.",
  moodboard: [
    { url: placeholderImages.find(p => p.id === 'moodboard1')?.imageUrl || '', hint: 'modern living room'},
    { url: placeholderImages.find(p => p.id === 'moodboard2')?.imageUrl || '', hint: 'wood accent wall'},
    { url: placeholderImages.find(p => p.id === 'moodboard3')?.imageUrl || '', hint: 'cozy bedroom'},
  ],
};

export default function AiDesignerSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AiResponse | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResponse(null);

    // Simulate AI processing time
    setTimeout(() => {
      setResponse(mockAiResponse);
      setIsLoading(false);
    }, 2000);
  };
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <section id="ia-designer" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Diseñador Virtual con IA</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              ¿No sabes por dónde empezar? Sube una foto de tu espacio, cuéntanos tus gustos y deja que nuestra inteligencia artificial te dé sugerencias de diseño personalizadas.
            </p>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Prueba nuestro diseñador IA</CardTitle>
                <CardDescription>Sube una foto y describe el estilo que buscas.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="space-photo">Foto de tu espacio</Label>
                    <Input id="space-photo" type="file" accept="image/*" onChange={handleImageChange} />
                  </div>
                  {imagePreview && (
                      <div className="relative w-full h-48 rounded-md overflow-hidden border">
                          <Image src={imagePreview} alt="Vista previa del espacio" layout="fill" objectFit="cover" />
                      </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="style-description">Describe tu estilo deseado</Label>
                    <Textarea id="style-description" placeholder="Ej: Me gusta el estilo minimalista, con colores claros y toques de madera..." />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando...
                      </>
                    ) : (
                      <>
                        <Bot className="mr-2 h-4 w-4" />
                        Obtener Sugerencias
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            {isLoading && (
              <div className="text-center space-y-4">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                <p className="text-muted-foreground">Nuestra IA está diseñando algo increíble para ti...</p>
              </div>
            )}
            {response && (
              <Card className="w-full shadow-lg animate-in fade-in-50 duration-500">
                <CardHeader>
                  <CardTitle>{response.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{response.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 font-headline">Moodboard de Inspiración</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {response.moodboard.map((item, index) => (
                        <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                          <Image 
                            src={item.url} 
                            alt={`Inspiración ${index + 1}`} 
                            fill
                            sizes="(max-width: 768px) 30vw, 10vw"
                            className="object-cover"
                            data-ai-hint={item.hint} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            {!isLoading && !response && (
              <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <Bot className="mx-auto h-12 w-12 mb-4" />
                <p>Las sugerencias de diseño aparecerán aquí.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
