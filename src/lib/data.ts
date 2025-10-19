import { DraftingCompass, Home, Brush } from 'lucide-react';

export const placeholderImages = [
  {
    id: 'hero',
    description: 'A beautifully remodeled modern living room.',
    imageUrl: 'https://picsum.photos/seed/hero/1920/1080',
    imageHint: 'modern living room',
  },
  {
    id: 'gallery1-before',
    description: 'An old, dated kitchen before remodeling.',
    imageUrl: 'https://i.imgur.com/kdkxOO3.jpeg',
    imageHint: 'dated apartment living room',
  },
  {
    id: 'gallery1-after',
    description: 'A modern, bright kitchen after remodeling.',
    imageUrl: 'https://i.imgur.com/gOQ49yZ.jpeg',
    imageHint: 'modern apartment living room',
  },
  {
    id: 'gallery2-before',
    description: 'A cramped bathroom before renovation.',
    imageUrl: 'https://picsum.photos/seed/apt2b/800/600',
    imageHint: 'old apartment kitchen',
  },
  {
    id: 'gallery2-after',
    description: 'A spacious, elegant bathroom after renovation.',
    imageUrl: 'https://picsum.photos/seed/apt2a/800/600',
    imageHint: 'remodeled apartment kitchen',
  },
  {
    id: 'gallery3-before',
    description: 'An unfinished basement space.',
    imageUrl: 'https://picsum.photos/seed/apt3b/800/600',
    imageHint: 'dark small bedroom',
  },
  {
    id: 'gallery3-after',
    description: 'A cozy family room created in the remodeled basement.',
    imageUrl: 'https://picsum.photos/seed/apt3a/800/600',
    imageHint: 'bright modern bedroom',
  },
    {
    id: 'gallery4-before',
    description: 'An old backyard patio.',
    imageUrl: 'https://picsum.photos/seed/apt4b/800/600',
    imageHint: 'cluttered balcony',
  },
  {
    id: 'gallery4-after',
    description: 'A beautiful outdoor living space.',
    imageUrl: 'https://picsum.photos/seed/apt4a/800/600',
    imageHint: 'modern apartment balcony',
  },
  {
    id: 'avatar1',
    description: 'Avatar of a happy customer.',
    imageUrl: 'https://picsum.photos/seed/avatar1/100/100',
    imageHint: 'woman smiling',
  },
  {
    id: 'avatar2',
    description: 'Avatar of a happy customer.',
    imageUrl: 'https://picsum.photos/seed/avatar2/100/100',
    imageHint: 'man portrait',
  },
  {
    id: 'avatar3',
    description: 'Avatar of a happy customer.',
    imageUrl: 'https://picsum.photos/seed/avatar3/100/100',
    imageHint: 'person smiling',
  },
];

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
      imageHint: placeholderImages.find(p => p.id === 'gallery1-before')?.imageHint || '',
    },
    after: {
      imageUrl: 'https://i.imgur.com/gOQ49yZ.jpeg',
      imageHint: placeholderImages.find(p => p.id === 'gallery1-after')?.imageHint || '',
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
