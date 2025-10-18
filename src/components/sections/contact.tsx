"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor ingresa un email válido."),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    });
    form.reset();
  }

  return (
    <section id="contacto" className="border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ponte en Contacto</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
            ¿Listo para empezar tu próximo proyecto? Envíanos un mensaje o llámanos.
            </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">Email</h3>
                        <p className="text-muted-foreground">Envíanos tus preguntas a nuestra dirección de correo.</p>
                        <a href="mailto:hola@multysoluciones.com" className="text-primary font-medium hover:underline">hola@multysoluciones.com</a>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">Teléfono</h3>
                        <p className="text-muted-foreground">Llámanos para una consulta directa.</p>
                        <a href="tel:+123456789" className="text-primary font-medium hover:underline">+1 (234) 567-89</a>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline">Oficina</h3>
                        <p className="text-muted-foreground">Av. Siempreviva 123, Springfield</p>
                    </div>
                </div>
            </div>

            <div>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                            <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Asunto</FormLabel>
                        <FormControl>
                            <Input placeholder="Asunto de tu mensaje" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full">Enviar Mensaje</Button>
                </form>
                </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
