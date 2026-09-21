# Pixel Arcade - Evolución del proyecto

Proyecto desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC. La carpeta `tareas` registra la evolución progresiva de una tienda web de videojuegos desde HTML5 básico hasta una interfaz responsive construida con Bootstrap 5.3.

## Resumen por semana

| Semana | Enfoque | Agregados principales |
| --- | --- | --- |
| Semana 1 | Fundamentos HTML5 | Estructura semántica inicial, navegación, catálogo de productos, enlaces, imágenes y footer. |
| Semana 2 | CSS3 y formularios | Hoja de estilos externa, variables CSS, layout con Grid y Flexbox, tarjetas de productos, etiquetas visuales y formulario de contacto accesible. |
| Semana 3 | Diseño responsive | Catálogo ampliado a seis productos, mejoras de accesibilidad, media queries, adaptación móvil/tablet/escritorio, sombras, gradientes y efectos visuales. |
| Semana 4 | Bootstrap 5.3 responsive | Navbar colapsable, carrusel automático, Grid System, seis Cards Bootstrap, formulario conservado y footer integrado con el estilo visual original. |

## Evolución detallada

### Semana 1 - Estructura HTML5

La primera versión estableció la base funcional de Pixel Arcade:

- Documento HTML5 con `doctype`, `lang="es"`, `charset` y viewport.
- Encabezado con identidad de la tienda.
- Menú de navegación con enlaces internos.
- Sección de productos con tres artículos.
- Imágenes públicas con textos alternativos.
- Pie de página con dirección, contacto y redes sociales.

Archivo principal: [sem01/index.html](sem01/index.html)

### Semana 2 - CSS3, layout y formulario

La segunda semana incorporó una capa visual y una interacción más completa:

- Archivo CSS externo en `css/styles.css`.
- Variables CSS para colores, tipografías y superficies.
- Catálogo organizado mediante CSS Grid.
- Navegación y formulario estructurados con Flexbox.
- Formulario de contacto con nombre, correo, categoría y mensaje.
- Labels vinculados correctamente con sus controles.
- Etiquetas de estado para productos como Nuevo, Oferta y Más vendido.

Archivo principal: [sem02/index.html](sem02/index.html)

### Semana 3 - Responsividad y catálogo ampliado

La tercera semana consolidó la experiencia responsive:

- Catálogo ampliado de tres a seis productos.
- Imágenes con carga diferida mediante `loading="lazy"`.
- Diseño adaptable con `repeat(auto-fit, minmax(...))`.
- Media query para pantallas móviles.
- Mejoras en estados hover y focus-visible.
- Fondo degradado, tarjetas oscuras, sombras y efectos visuales gamer.
- Evidencias de visualización en escritorio, tablet y móvil.

Archivo principal: [sem03/index.html](sem03/index.html)

### Semana 4 - Bootstrap 5.3

La versión actual conserva la identidad visual del proyecto y agrega los componentes exigidos por la pauta:

- Navbar Bootstrap con `navbar-expand-lg`.
- Menú hamburguesa mediante `navbar-toggler`.
- Brand con texto e icono SVG.
- Atributos ARIA para navegación y controles.
- Carrusel Bootstrap de tres diapositivas.
- Autoplay exacto de 3 segundos con `data-bs-interval="3000"`.
- Indicadores, controles prev/next y textos `visually-hidden`.
- Imágenes Unsplash con `d-block w-100` y `object-fit: cover`.
- Grid con `row g-4` y `col-12 col-md-6 col-lg-4`.
- Seis Cards con `card`, `h-100`, `card-img-top`, `card-body`, `card-title` y `card-text`.
- Botones `btn btn-primary` con efecto glassmorphism y volumen 3D.
- Formulario de contacto original conservado y adaptado a Bootstrap.
- Footer con contraste, degradado morado y layout responsive.
- Inicialización explícita del carrusel mediante JavaScript ES6.

Archivos de la entrega:

- [sem04/README.md](sem04/README.md)
- [sem04/index.html](sem04/index.html)
- [sem04/css/styles.css](sem04/css/styles.css)
- [sem04/js/main.js](sem04/js/main.js)

## Tecnologías utilizadas

| Tecnología | Aplicación en el proyecto |
| --- | --- |
| HTML5 | Estructura semántica y accesibilidad básica |
| CSS3 | Variables, Grid, Flexbox, responsive, gradientes y glassmorphism |
| Bootstrap 5.3.3 | Navbar, Carousel, Grid, Cards, botones y controles de formulario |
| JavaScript ES6+ | Inicialización del carrusel y eventos Bootstrap |
| Unsplash | Imágenes públicas del catálogo y carrusel |
| GitHub Pages | Publicación del sitio estático |

## Estructura del repositorio

```text
tareas/
├── readme.md
├── sem01/
│   └── index.html
├── sem02/
│   ├── index.html
│   └── css/styles.css
├── sem03/
│   ├── index.html
│   ├── css/styles.css
│   └── img/
├── sem04/
│   ├── README.md
│   ├── index.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
├── sem05/
└── sem06/
```

## Visualización local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/andreaendigital/frontend01.git
   ```

2. Entra a la carpeta de la semana que quieras revisar:

   ```bash
   cd frontend01/sem04
   ```

3. Abre `index.html` directamente en el navegador o utiliza **Live Server** en Visual Studio Code.

La entrega de Semana 4 carga Bootstrap e imágenes desde CDN, por lo que necesita conexión a Internet para mostrar todos los recursos externos.

## Enlaces

- [Repositorio GitHub](https://github.com/andreaendigital/frontend01)
- [Semana 1](sem01/index.html)
- [Semana 2](sem02/index.html)
- [Semana 3](sem03/index.html)
- [Semana 4](sem04/index.html)

## Deploy por semana

- [Deploy Semana 1](https://andreaendigital.github.io/frontend01/sem01/index.html)
- [Deploy Semana 2](https://andreaendigital.github.io/frontend01/sem02/index.html)
- [Deploy Semana 3](https://andreaendigital.github.io/frontend01/sem03/index.html)
- [Deploy Semana 4](https://andreaendigital.github.io/frontend01/sem04/index.html)

## Evidencias por semana

Las evidencias responsive y capturas de cada avance se encuentran en el README correspondiente a cada semana:

- [Evidencias Semana 1](sem01/README.md)
- [Evidencias Semana 2](sem02/README.md)
- [Evidencias Semana 3](sem03/README.md)
- [Evidencias Semana 4](sem04/README.md)
