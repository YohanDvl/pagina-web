Galería local
==============

Sube aquí tus imágenes de proyectos. La web busca estos archivos por número de proyecto:

Proyecto X (X = 1..4):
- Antes:   proyecto-X-antes.jpg  (también se acepta .png)
- Después: proyecto-X-despues.jpg (también se acepta .png)

¿Dónde se muestran?
- La tarjeta de la galería usa la imagen "después" como portada.
- Al abrir el diálogo del proyecto se muestran ambas: "Antes" y "Después".

Extensiones mixtas
- Si subes .png pero en el código está .jpg (o viceversa), el componente intentará automáticamente la extensión alternativa antes de mostrar el placeholder.

Hero (imagen principal de la portada)
- Actualmente apunta a: /gallery/proyecto-1-despues.jpg
- Puedes reemplazarla subiendo otra imagen y cambiando la ruta en src/components/sections/hero.tsx (const heroSrc).

Placeholder
- Si no existe una imagen, se muestra /gallery/placeholder.svg para evitar romper el diseño.

