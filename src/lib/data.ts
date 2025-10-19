import { DraftingCompass, Home, Brush } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

export const packages = [
  {
    id: 1,
    title: 'Asesoría de Diseño',
    icon: DraftingCompass,
    description: 'Ideal para quienes necesitan una guía experta para definir el estilo y la distribución de sus espacios.',
    features: [
      'Análisis de espacio y necesidades',
      'Desarrollo de concepto de diseño',
      'Moodboard y paleta de colores',
      'Recomendación de mobiliario y materiales',
    ],
  },
  {
    id: 2,
    title: 'Remodelación Parcial',
    icon: Brush,
    description: 'Perfecto para renovar un espacio específico como la cocina, el baño o una habitación.',
    features: [
      'Todo lo del paquete de Asesoría',
      'Planos técnicos y renders 3D',
      'Gestión de proveedores seleccionados',
      'Supervisión de trabajos específicos',
    ],
  },
  {
    id: 3,
    title: 'Proyecto Llave en Mano',
    icon: Home,
    description: 'Nos encargamos de todo el proceso, desde la idea inicial hasta la entrega final de tu hogar completamente renovado.',
    features: [
      'Todo lo del paquete de Remodelación Parcial',
      'Gestión integral del proyecto',
      'Coordinación de todos los gremios',
      'Entrega final con limpieza profesional',
    ],
  },
];

export const galleryItems = [
  {
    id: 1,
    title: 'Sala de Estar de Concepto Abierto',
    description: 'Renovación de una sala de estar para crear un espacio moderno y luminoso.',
    before: {
      imageUrl: 'https://i.imgur.com/kdkxOO3.jpeg',
      imageHint: 'living room before',
    },
    after: {
      imageUrl: 'https://i.imgur.com/gOQ49yZ.jpeg',
      imageHint: 'living room after',
    },
  },
  {
    id: 2,
    title: 'Cocina Gourmet Integrada',
    description: 'Transformación de una cocina cerrada en un espacio funcional y elegante.',
    before: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery2-before')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery2-before')?.imageHint || '',
    },
    after: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery2-after')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery2-after')?.imageHint || '',
    },
  },
  {
    id: 3,
    title: 'Dormitorio Principal tipo Suite',
    description: 'Un dormitorio oscuro se convierte en un refugio de luz y tranquilidad.',
    before: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery3-before')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery3-before')?.imageHint || '',
    },
    after: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery3-after')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery3-after')?.imageHint || '',
    },
  },
  {
    id: 4,
    title: 'Balcón Urbano Funcional',
    description: 'Convertimos un balcón desaprovechado en una extensión del área social.',
    before: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery4-before')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery4-before')?.imageHint || '',
    },
    after: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery4-after')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery4-after')?.imageHint || '',
    },
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Ana García',
    location: 'Springfield',
    rating: 5,
    quote: 'El equipo de Moica superó todas mis expectativas. Transformaron mi cocina en el corazón de mi hogar. ¡Profesionales y detallistas!',
    avatar: {
      imageUrl: placeholderImages.find(p => p.id === 'avatar1')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'avatar1')?.imageHint || '',
    },
  },
  {
    id: 2,
    name: 'Carlos Rodriguez',
    location: 'Shelbyville',
    rating: 5,
    quote: 'El proceso fue transparente y sin estrés. Su asesoría de diseño fue clave para lograr el estilo que siempre quise. ¡Totalmente recomendados!',
    avatar: {
      imageUrl: placeholderImages.find(p => p.id === 'avatar2')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'avatar2')?.imageHint || '',
    },
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    location: 'Capital City',
    rating: 5,
    quote: '¡Increíble atención al detalle! Opté por el proyecto llave en mano y fue la mejor decisión. Mi apartamento parece otro.',
    avatar: {
      imageUrl: placeholderImages.find(p => p.id === 'avatar3')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'avatar3')?.imageHint || '',
    },
  },
   {
    id: 4,
    name: 'Laura Pérez',
    location: 'Springfield',
    rating: 4,
    quote: 'Muy contenta con la remodelación de mi baño. Hubo un pequeño retraso, pero la calidad final del trabajo lo compensó con creces.',
    avatar: {
      imageUrl: 'https://picsum.photos/seed/avatar4/100/100',
      imageHint: 'woman smiling',
    },
  },
];
