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
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor ingresa un email válido."),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

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
      <path d="M14.05 10.95A10 10 0 0 1 14.05 4.95" />
      <path d="M14.05 1.95A14 14 0 0 1 14.05 13.95" />
    </svg>
);

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
            ¿Listo para empezar tu próximo proyecto? Envíanos un mensaje o contáctanos.
            </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
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
