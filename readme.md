# Pixel Arcade - Tienda de Videojuegos 🎮

Proyecto web frontend desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC. Corresponde a la entrega de la **Experiencia de Aprendizaje 1: Aplicando los fundamentos de la web con HTML5 y CSS3** (Actividad Sumativa Semana 3).

El sitio implementa una arquitectura web semántica, modular y totalmente responsiva, aplicando conceptos de **CSS Grid**, **Flexbox**, **Modelo de Cajas**, **Variables CSS (`:root`)** y efectos de interfaz modernos estilo *cyberpunk/tech* (Glassmorphism y componentes volumétricos 3D).

---

## 🌐 Enlaces del Proyecto

- **Repositorio GitHub:** [https://github.com/andreaendigital/frontend01](https://github.com/andreaendigital/frontend01)
- **Sitio Desplegado (GitHub Pages):** [https://andreaendigital.github.io/frontend01/sem03/index](https://andreaendigital.github.io/frontend01/sem03/index)

---

## 📸 Evidencias de Diseño Responsivo y Adaptabilidad

Demostración visual de la interfaz adaptada a diferentes resoluciones de pantalla utilizando Chrome DevTools:

### 🖥️ 1. Vista de Escritorio (Desktop - 1200px+)
Visualización del catálogo completo en cuadrícula bidimensional de 3 columnas mediante CSS Grid y barra de navegación horizontal expandida.

![Vista de Escritorio](/sem03/img/pc01.png)

![Vista de Escritorio](/sem03/img/pc02.png)

---

### 📱 2. Vista de Tablet (Tablet / Pantalla Mediana - 768px)
Reorganización fluida de las tarjetas en 2 columnas mediante la función `repeat(auto-fit, minmax(260px, 1fr))` y contención de márgenes.

![Vista de Tablet](/sem03/img/tablet01.png)

![Vista de Tablet](/sem03/img/tablet02.png)

![Vista de Tablet](/sem03/img/tablet03.png)


---

### 📲 3. Vista Móvil (Mobile - 375px / 600px o menos)
Colapso del catálogo a 1 sola columna, ajuste vertical de los enlaces del menú (`flex-direction: column`) y optimización del formulario de contacto táctil mediante Media Queries.

![Vista Móvil](/sem03/img/movil01.jpeg)

![Vista Móvil](/sem03/img/movil02.jpeg)

![Vista Móvil](/sem03/img/movil03.jpeg)

---

## 🛠️ Tecnologías y Estándares Aplicados

- **HTML5 Semántico (IL2):**
  - Estructuración lógica con etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<ul>`, `<li>`, `<form>`, `<footer>`).
  - Accesibilidad web (A11y) con atributos `alt` descriptivos, `aria-label` en navegación y vinculación estricta entre `<label for="...">` e `<input id="...">`.
  - Carga diferida de imágenes con `loading="lazy"`.

- **CSS3 Moderno y Modelo de Cajas (IL3):**
  - Reset universal con `box-sizing: border-box` para un cálculo dimensional predecible.
  - Centralización de paleta cromática, tipografías y sombras mediante variables CSS en `:root`.
  - Capas de fondo superpuestas (`linear-gradient` multicapa) con `background-attachment: fixed`.
  - Botón interactivo 3D volumétrico con efecto cristalino (`backdrop-filter: blur()`), sombras compuestas (`box-shadow` e `inset`) y estados `:hover`, `:active` y `:focus-visible`.

- **Layouts Responsivos con Grid y Flexbox (IL4):**
  - **CSS Grid:** Catálogo de productos bidimensional dinámico con `repeat(auto-fit, minmax(260px, 1fr))` y espaciado consistente mediante `gap`.
  - **Flexbox:** Distribución centrada de la barra de navegación, apilamiento de campos de formulario y alineación interna en tarjetas.
  - **Media Queries:** Breakpoint de control en `@media (max-width: 600px)`.

---

## 📁 Estructura del Repositorio

```text
├── index.html              # Documento principal con estructura HTML5 semántica
├── README.md               # Documentación y capturas del proyecto
├── css/
│   └── styles.css          # Hoja de estilos externa con Grid, Flexbox y Variables
└── img/            # Evidencias gráficas de responsividad
    ├── movil01.jpeg
    ├── tablet01.jpeg
    └── pc01.jpeg