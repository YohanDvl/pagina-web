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
    imageUrl: 'https://picsum.photos/seed/g1b/800/600',
    imageHint: 'old kitchen',
  },
  {
    id: 'gallery1-after',
    description: 'A modern, bright kitchen after remodeling.',
    imageUrl: 'https://picsum.photos/seed/g1a/800/600',
    imageHint: 'modern kitchen',
  },
  {
    id: 'gallery2-before',
    description: 'A cramped bathroom before renovation.',
    imageUrl: 'https://picsum.photos/seed/g2b/800/600',
    imageHint: 'old bathroom',
  },
  {
    id: 'gallery2-after',
    description: 'A spacious, elegant bathroom after renovation.',
    imageUrl: 'https://picsum.photos/seed/g2a/800/600',
    imageHint: 'elegant bathroom',
  },
  {
    id: 'gallery3-before',
    description: 'An unfinished basement space.',
    imageUrl: 'https://picsum.photos/seed/g3b/800/600',
    imageHint: 'unfinished basement',
  },
  {
    id: 'gallery3-after',
    description: 'A cozy family room created in the remodeled basement.',
    imageUrl: 'https://picsum.photos/seed/g3a/800/600',
    imageHint: 'cozy family room',
  },
    {
    id: 'gallery4-before',
    description: 'An old backyard patio.',
    imageUrl: 'https://picsum.photos/seed/g4b/800/600',
    imageHint: 'old patio',
  },
  {
    id: 'gallery4-after',
    description: 'A beautiful outdoor living space.',
    imageUrl: 'https://picsum.photos/seed/g4a/800/600',
    imageHint: 'outdoor living space',
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
  {
    id: 'moodboard1',
    description: 'AI generated moodboard image 1',
    imageUrl: 'https://picsum.photos/seed/mb1/400/400',
    imageHint: 'modern living room',
  },
  {
    id: 'moodboard2',
    description: 'AI generated moodboard image 2',
    imageUrl: 'https://picsum.photos/seed/mb2/400/400',
    imageHint: 'wood accent wall',
  },
  {
    id: 'moodboard3',
    description: 'AI generated moodboard image 3',
    imageUrl: 'https://picsum.photos/seed/mb3/400/400',
    imageHint: 'cozy bedroom',
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
    title: 'Cocina Moderna y Funcional',
    description: 'Transformación completa de una cocina anticuada a un espacio abierto y luminoso.',
    before: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery1-before')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery1-before')?.imageHint || '',
    },
    after: {
      imageUrl: placeholderImages.find(p => p.id === 'gallery1-after')?.imageUrl || '',
      imageHint: placeholderImages.find(p => p.id === 'gallery1-after')?.imageHint || '',
    },
  },
  {
    id: 2,
    title: 'Baño tipo Spa',
    description: 'Un baño pequeño y oscuro convertido en un oasis de relajación y elegancia.',
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
    title: 'Sótano Acogedor',
    description: 'Un sótano sin uso se convierte en una cálida sala de estar familiar.',
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
    title: 'Terraza Exterior',
    description: 'Convertimos un patio trasero descuidado en un espacio ideal para el entretenimiento.',
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
