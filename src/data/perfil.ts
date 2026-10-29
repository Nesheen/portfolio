// Datos personales en un solo lugar. Un link vacío ("") no se muestra.
export const perfil = {
  nombre: "Neyén",
  apellido: "Bianchi",
  rol: "Agentes de IA y backend",
  bajada: "Diseño agentes de IA y la infraestructura que los sostiene. Enseño programación en la UTN.",
  descripcion: "Neyén Bianchi diseña agentes de IA y la infraestructura que los sostiene. Backend en Python y FastAPI, MCP, n8n. Enseña programación en la UTN.",
  base: "Mendoza, AR",
  titulo: "TUP, UTN (2026)",
  idiomas: "Español, inglés avanzado",
  mail: "bianchineyen@gmail.com",
  links: {
    github: "", // TODO: ej. "https://github.com/Nesheen"
    linkedin: "", // TODO
    cv: "", // TODO: dejar el PDF en public/ y poner "/cv-neyen-bianchi.pdf"
  },
  enCorto: [
    "Backend de 12 microservicios en FastAPI, en producción con alumnos reales.",
    "Agentes, servidores MCP y workflows en n8n.",
    "Coordino Programación IV en la TUPaD y un equipo de tutores.",
    "Coautor en WICC 2026 y en un proceedings de Springer.",
    "Despliego en infraestructura propia: Docker, nginx, EasyPanel.",
  ],
  quien: [
    "Me gusta cubrir el ciclo completo: diseñar la arquitectura, escribir el código y dejarlo corriendo en un servidor propio.",
    "Trabajo con Python y FastAPI del lado del backend, React y TypeScript del lado del frontend, y cada vez más con agentes de IA: cómo se conectan a herramientas reales vía MCP y cómo se audita lo que hacen.",
    "Vengo de la docencia. Coordino cursos de programación en la UTN, y esa experiencia es la que me llevó a construir un tutor que enseña con preguntas en vez de dar respuestas.",
  ],
};

// Chat guionado de la sección Sócrates.
export const guionSocrates = [
  { q: "¿Qué sabés hacer?", a: "¿Lo preguntás para contratar, para sumar a alguien a un proyecto o por curiosidad? Si es lo primero, mirá el tutor: arquitectura, código y despliegue los hizo él." },
  { q: "¿Por qué un tutor que no da respuestas?", a: "¿Cuándo aprendiste más: cuando te pasaron la solución o cuando la encontraste vos? El tutor apuesta a lo segundo, y deja registro de cómo se usó la IA." },
  { q: "¿Qué stack usa?", a: "¿Qué esperarías vos para algo que tienen que usar cien alumnos al mismo tiempo? Él eligió FastAPI en microservicios, Docker y nginx, en un servidor propio." },
  { q: "¿Cómo lo contacto?", a: "¿Ya bajaste hasta el final de la página? El mail está ahí, bien grande." },
];
