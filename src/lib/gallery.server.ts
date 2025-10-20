import fs from 'fs';
import path from 'path';
import { galleryItems } from './data';

function fileExists(publicRelativePath: string): boolean {
  const cleaned = publicRelativePath.replace(/^\/+/, '');
  const fullPath = path.join(process.cwd(), 'public', cleaned);
  try {
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}

export type GalleryItem = typeof galleryItems[number];

export function getGalleryItemsFiltered(): GalleryItem[] {
  // Solo mostrar proyectos que tengan ambas imágenes (antes y después)
  return galleryItems.filter((item) =>
    fileExists(item.before.imageUrl) && fileExists(item.after.imageUrl)
  );
}
