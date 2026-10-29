# Portfolio — Neyén Bianchi

Sitio estático en **Astro 7**, deploy en **Vercel** (cada push a `main` publica). Sin framework de UI: componentes `.astro` con CSS scopeado y JS vanilla mínimo.

## Dónde va cada cosa

| Quiero… | Toco |
|---|---|
| Sumar un proyecto o publicación | Copiar `src/content/proyectos/_plantilla.md` a `<slug>.md` |
| Sumar un hito al recorrido | `src/content/recorrido.yaml` (necesita `id` y `orden`) |
| Cambiar datos personales, links, chat de Sócrates | `src/data/perfil.ts` |
| Cambiar colores / tipografía | `:root` en `src/styles/global.css` |
| Un dibujo nuevo para proyectos | `src/components/Boceto.astro` + enum `boceto` en `src/content.config.ts` |

## Reglas

- Diseño único: paleta "pleno" (noche + crema, acentos sol/fuego/selva/cielo). **No** reintroducir el modo "tinta" ni un toggle de tema.
- Contenido honesto: nada inflado; los esquemas se marcan como ilustrativos. Nunca dejar `TODO` visible en la página (sí en comentarios).
- Lo que se pueda generar en build (SVG, listas) se genera en el frontmatter de Astro, no en el cliente.
- Antes de commitear: `npm run build` tiene que pasar (el schema de content collections valida el frontmatter).
- `prototipo/` es el HTML original de referencia; no se publica.

## Comandos

```bash
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```
