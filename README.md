# Refactorización — Sitio del Blog

Ejercicio de curso (AD-14-1) que consiste en refactorizar un sitio de blog estático para usar **Bootstrap 5**, aplicando componentes como Navbar, sistema de grid, formularios y alertas, siguiendo un wireframe dado (ver [instructions.md](instructions.md) y la carpeta [Wireframe-Backup](Wireframe-Backup)).

## Tech stack

- HTML5 / CSS3
- JavaScript (vanilla)
- [Bootstrap 5.3](https://getbootstrap.com/) vía CDN

## Estructura del proyecto

```
Refactorizacion-SitioDelBlog/
├── index.html              # Home — Navbar, contenido principal, cols para ads/noticias
├── about.html               # About Us — información del proyecto
├── contact.html              # Contact Us — formulario con alerta de confirmación
├── css/
│   └── style.css             # Estilos propios (además de Bootstrap)
├── js/
│   └── script.js             # Lógica del formulario de contacto (alerta al enviar)
├── Wireframe-Backup/         # Capturas del wireframe de Figma usado como guía
└── instructions.md           # Enunciado original de la actividad
```

## Páginas

- **Home** (`index.html`): Navbar, contenido central de ejemplo (imagen + video embebido) y columnas laterales reservadas para publicidad/noticias.
- **About Us** (`about.html`): texto sobre el propósito del blog.
- **Contact Us** (`contact.html`): formulario (email + mensaje) que muestra una alerta de Bootstrap ("Email sent successfully!") al enviarse, sin envío real de datos.

## Cómo verlo localmente

No requiere instalación ni build: son archivos estáticos.

```bash
# Opción 1: abrir directamente
open index.html

# Opción 2: con un servidor local (recomendado, por ejemplo con la extensión Live Server de VS Code)
```

## Problema conocido

Las tres páginas HTML enlazan la hoja de estilos como `css/styles.css` (plural), pero el archivo real en el repo es `css/style.css` (singular) — por lo tanto los estilos personalizados no se están cargando actualmente. Basta con corregir el nombre en los `<link>` de `index.html`, `about.html` y `contact.html`, o renombrar el archivo CSS.

## Autor

**Kaleb Torres**
