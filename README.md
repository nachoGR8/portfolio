# Portfolio — Ignacio Piles Pla

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Lucide.

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción
```

## Datos por completar (todo en `lib/data.ts`)

- `links.photo`: copia tu foto a `public/` (p. ej. `/ignacio.jpg`, vertical 4:5) y pon la ruta. Mientras esté vacío se muestra un monograma.
- `links.email`: si lo rellenas aparece un botón de email en Contacto.
- `period` de cada experiencia (Geinfor, Clásica Urbana): fechas de las prácticas.
- Descripción de Clásica Urbana: solo consta el puesto.
- `links.linkedin`: se usa la URL del prompt (`/in/ignacio-piles-pla/`). Confirma que es la correcta.
- `projects[].href`: enlaces públicos si quieres enseñar el código.

## Producción

Define `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com` antes de compilar (canonical, Open Graph, sitemap y robots).
