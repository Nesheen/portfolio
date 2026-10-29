import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

// Un .md por proyecto o publicación. El cuerpo del .md es la descripción.
const proyectos = defineCollection({
  loader: glob({ base: "./src/content/proyectos", pattern: "**/[^_]*.md" }),
  schema: z.object({
    titulo: z.string(),
    meta: z.string(), // línea chica arriba del título: lugar, fecha, tipo
    orden: z.number(), // menor = más arriba
    chips: z.array(z.string()).default([]),
    boceto: z.enum(["chat", "curva", "piramide", "ninguno"]).default("ninguno"),
    bocetoPie: z.string().optional(),
    cifras: z.array(z.object({ valor: z.string(), etiqueta: z.string() })).default([]),
    diagrama: z.enum(["microservicios"]).optional(),
    servicios: z.array(z.string()).default([]), // nombres para el diagrama de microservicios
    detalle: z.string().optional(),
    link: z.string().url().optional(),
    linkTexto: z.string().optional(),
    borrador: z.boolean().default(false), // true = no se publica
  }),
});

const recorrido = defineCollection({
  loader: file("./src/content/recorrido.yaml"),
  schema: z.object({
    orden: z.number(),
    anio: z.union([z.string(), z.number()]),
    titulo: z.string(),
    lugar: z.string(),
    texto: z.string().optional(),
    extra: z.array(z.string()).default([]),
  }),
});

export const collections = { proyectos, recorrido };
