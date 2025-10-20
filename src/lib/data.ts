import { DraftingCompass, Home, Brush } from 'lucide-react';

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
    title: 'Proyecto 1: Sala de Estar',
    description: 'Transformación completa de sala de estar.',
    before: {
      imageUrl: '/gallery/proyecto-1-antes.jpg',
      imageHint: 'living room before',
    },
    after: {
      imageUrl: '/gallery/proyecto-1-despues.jpg',
      imageHint: 'living room after',
    },
  },
  {
    id: 2,
    title: 'Proyecto 2: Cocina',
    description: 'Renovación de cocina para un estilo moderno.',
    before: {
      imageUrl: '/gallery/proyecto-2-antes.jpg',
      imageHint: 'kitchen before',
    },
    after: {
      imageUrl: '/gallery/proyecto-2-despues.jpg',
      imageHint: 'kitchen after',
    },
  },
  {
    id: 3,
    title: 'Proyecto 3: Dormitorio',
    description: 'Un dormitorio convertido en un espacio acogedor.',
    before: {
      imageUrl: '/gallery/proyecto-3-antes.jpg',
      imageHint: 'bedroom before',
    },
    after: {
      imageUrl: '/gallery/proyecto-3-despues.jpg',
      imageHint: 'bedroom after',
    },
  },
  {
    id: 4,
    title: 'Proyecto 4: Baño',
    description: 'Remodelación funcional y elegante de un baño.',
    before: {
      imageUrl: '/gallery/proyecto-4-antes.png',
      imageHint: 'bathroom before',
    },
    after: {
      imageUrl: '/gallery/proyecto-4-despues.png',
      imageHint: 'bathroom after',
    },
  },
  {
    id: 5,
    title: 'Proyecto 5: Fachada',
    description: 'Renovación exterior para una fachada moderna y atractiva, mejorando estética y resistencia.',
    before: {
      imageUrl: '/gallery/proyecto-5-antes.jpg',
      imageHint: 'facade before',
    },
    after: {
      imageUrl: '/gallery/proyecto-5-despues.jpg',
      imageHint: 'facade after',
    },
  },
  {
    id: 6,
    title: 'Proyecto 6: Patio Interno',
    description: 'Transformación de patio interno en un espacio funcional y acogedor para compartir y descansar.',
    before: {
      imageUrl: '/gallery/proyecto-6-antes.jpg',
      imageHint: 'indoor patio before',
    },
    after: {
      imageUrl: '/gallery/proyecto-6-despues.jpg',
      imageHint: 'indoor patio after',
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
      imageUrl: '/avatars/avatar1.jpg',
      imageHint: 'avatar 1',
    },
  },
  {
    id: 2,
    name: 'Carlos Rodriguez',
    location: 'Shelbyville',
    rating: 5,
    quote: 'El proceso fue transparente y sin estrés. Su asesoría de diseño fue clave para lograr el estilo que siempre quise. ¡Totalmente recomendados!',
    avatar: {
      imageUrl: '/avatars/avatar2.jpg',
      imageHint: 'avatar 2',
    },
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    location: 'Capital City',
    rating: 5,
    quote: '¡Increíble atención al detalle! Opté por el proyecto llave en mano y fue la mejor decisión. Mi apartamento parece otro.',
    avatar: {
      imageUrl: '/avatars/avatar3.jpg',
      imageHint: 'avatar 3',
    },
  },
   {
    id: 4,
    name: 'Laura Pérez',
    location: 'Springfield',
    rating: 4,
    quote: 'Muy contenta con la remodelación de mi baño. Hubo un pequeño retraso, pero la calidad final del trabajo lo compensó con creces.',
    avatar: {
      imageUrl: '/avatars/avatar4.jpg',
      imageHint: 'avatar 4',
    },
  },
];
