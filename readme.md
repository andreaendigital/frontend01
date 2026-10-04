# Pixel Arcade - Evolución del proyecto

Proyecto desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC. La carpeta `tareas` registra la evolución progresiva de una tienda web de videojuegos desde HTML5 básico hasta una interfaz responsive construida con Bootstrap 5.3.

## Resumen por semana

| Semana   | Enfoque                  | Agregados principales                                                                                                                                    |
| -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Semana 1 | Fundamentos HTML5        | Estructura semántica inicial, navegación, catálogo de productos, enlaces, imágenes y footer.                                                             |
| Semana 2 | CSS3 y formularios       | Hoja de estilos externa, variables CSS, layout con Grid y Flexbox, tarjetas de productos, etiquetas visuales y formulario de contacto accesible.         |
| Semana 3 | Diseño responsive        | Catálogo ampliado a seis productos, mejoras de accesibilidad, media queries, adaptación móvil/tablet/escritorio, sombras, gradientes y efectos visuales. |
| Semana 4 | Bootstrap 5.3 responsive | Navbar colapsable, carrusel automático, Grid System, seis Cards Bootstrap, formulario conservado y footer integrado con el estilo visual original.       |
| Semana 5 | JavaScript y Fetch API   | Manipulación dinámica del DOM, eventos interactivos, validación de formulario y carga de seis productos desde un archivo JSON local.                     |
| Semana 6 | Carrito y búsqueda       | Carrito dinámico, contador de unidades, total acumulado, búsqueda por submit, eliminación de productos y estructura reorganizada en `assets/`.           |
| Semana 7 | React y Vite             | Migración a una aplicación React con Vite, componentes reutilizables, hooks, renderizado condicional y carrito administrado mediante estado.             |
| Semana 8 | Estados y efectos React  | Carga dinámica desde JSON, uso de `useState` y `useEffect`, estados de carga/error, carrito interactivo y botones con renderizado condicional.           |

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

### Semana 5 - JavaScript, DOM y consumo asíncrono

La quinta semana agrega comportamiento dinámico sobre la base responsive de Bootstrap:

- Selección de elementos del DOM con `querySelector` y `querySelectorAll`.
- Creación de cards y mensajes mediante `document.createElement()`.
- Inserción y reemplazo de contenido con `appendChild()` y `replaceChildren()`.
- Evento `click` para mostrar u ocultar una recomendación dinámica.
- Eventos `mouseover` y `mouseout` para modificar visualmente las tarjetas.
- Evento `submit` con `preventDefault()` y validación de nombre, correo y mensaje.
- Consumo asíncrono del catálogo mediante `fetch()` y `async/await`.
- Estados visibles de carga, éxito y error en la interfaz.
- Catálogo de seis productos almacenado en `data/products.json`.
- Tres tarjetas iniciales en HTML como contenido de respaldo; al cargar el JSON se reemplazan por las seis tarjetas dinámicas.

Archivos de la entrega:

- [sem05/README.md](sem05/README.md)
- [sem05/index.html](sem05/index.html)
- [sem05/css/styles.css](sem05/css/styles.css)
- [sem05/js/main.js](sem05/js/main.js)
- [sem05/data/products.json](sem05/data/products.json)

### Semana 6 - Carrito, búsqueda y catálogo interactivo

La sexta semana extiende el catálogo de Semana 5 con una experiencia de compra básica y una estructura de recursos más ordenada:

- Reorganización de archivos dentro de `assets/css/`, `assets/js/`, `assets/data/` y `assets/img/`.
- Navbar responsive con las categorías Inicio, Productos, Carrito y Contacto.
- Formulario de búsqueda gestionado mediante `submit` y `preventDefault()`.
- Filtrado de productos por nombre y descripción sin recargar la página.
- Estado del carrito en memoria mediante el array `cart`.
- Evento `click` para agregar productos al carrito.
- Contador dinámico de unidades agregadas.
- Lista de productos con botones `Quitar` generados dinámicamente.
- Total acumulado calculado con `reduce()` y precios del JSON.
- Eliminación y decremento de unidades mediante `splice()` y actualización de `renderCart()`.
- Manejo de errores de Fetch con mensaje visible para el usuario.
- Evidencias de búsqueda y carrito en PC y móvil dentro de `assets/img/`.

Archivos de la entrega:

- [sem06/README.md](sem06/README.md)
- [sem06/index.html](sem06/index.html)
- [sem06/assets/css/styles.css](sem06/assets/css/styles.css)
- [sem06/assets/js/main.js](sem06/assets/js/main.js)
- [sem06/assets/data/products.json](sem06/assets/data/products.json)

### Semana 7 - Migración a React y Vite

La séptima semana transforma Pixel Arcade desde una página con JavaScript imperativo hacia una aplicación React organizada con Vite. La apariencia visual se conserva con Bootstrap 5.3 y los estilos personalizados, mientras que la lógica se separa en componentes reutilizables.

#### Cambios principales

- Migración del punto de entrada a `src/main.jsx` y montaje de React en `#root`.
- Configuración del proyecto mediante `package.json` y `vite.config.js`.
- Separación de la interfaz en `App.jsx`, `ProductList.jsx`, `ShoppingCart.jsx`, `CartTotal.jsx`, `Counter.jsx` y `UserStatus.jsx`.
- Uso de `useState` para el carrito, el contador y el texto de búsqueda.
- Uso de `.map()` para renderizar las tarjetas y las entradas del carrito.
- Uso de `.filter()` para buscar productos por nombre o descripción.
- Uso de `.reduce()` para calcular el total acumulado.
- Uso de `uniqueId` para agregar varias unidades como entradas independientes y eliminar solo la seleccionada.
- Renderizado condicional para el carrito vacío, los resultados de búsqueda y el contador singular/plural.
- Centralización de los recursos activos en `src/assets/`, evitando mantener una carpeta `assets` duplicada en la raíz de `sem07`.
- Exclusión de `node_modules/`, `dist/` y archivos temporales mediante `.gitignore`.

#### Estructura React

```text
sem07/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/
      ├── App.css
      ├── App.jsx
      ├── index.css
      ├── main.jsx
      ├── assets/
      │   ├── products.js
      │   └── styles.css
      └── components/
            ├── CartTotal.jsx
            ├── Counter.jsx
            ├── ProductList.jsx
            ├── ShoppingCart.jsx
            └── UserStatus.jsx
```

#### Renderizado condicional

En `ProductList.jsx`, si la búsqueda no encuentra resultados se muestra un mensaje alternativo:

```jsx
if (filteredProducts.length === 0) {
  return (
    <p className="text-warning">No encontramos productos con esa búsqueda.</p>
  );
}
```

En `ShoppingCart.jsx`, React decide si mostrar el mensaje de carrito vacío o las entradas agregadas:

```jsx
{
  cart.length === 0 ? (
    <p>Tu carrito está vacío.</p>
  ) : (
    cart.map((product) => <div key={product.uniqueId}>{product.name}</div>)
  );
}
```

#### Archivos de la entrega

- [sem07/README.md](sem07/README.md)
- [sem07/index.html](sem07/index.html)
- [sem07/package.json](sem07/package.json)
- [sem07/vite.config.js](sem07/vite.config.js)
- [sem07/src/App.jsx](sem07/src/App.jsx)
- [sem07/src/main.jsx](sem07/src/main.jsx)
- [sem07/src/components](sem07/src/components)

#### Ejecución local

```bash
cd sem07
npm install
npm run dev
```

Vite inicia normalmente la aplicación en `http://localhost:5173/`. Para comprobar la compilación de producción se utiliza `npm run build`.

### Semana 8 - Estados, efectos y catálogo dinámico

La semana 8 optimiza la aplicación React de la semana 7 mediante estados internos, efectos secundarios y renderizado condicional. Se conserva la gráfica de Pixel Arcade y se incorpora una carga simulada del catálogo desde `public/products.json`.

#### Cambios principales

- `useState` administra productos, carga, errores, búsqueda, carrito y contador.
- `useEffect` carga el catálogo JSON al montar la aplicación.
- `UserStatus` muestra los estados de carga, éxito o error.
- `ProductList` filtra productos y cambia el texto del botón entre `Agregar al carrito` y `En el carrito`.
- Todos los botones mantienen el estilo morado `btn-primary`.
- `ShoppingCart` permite agregar y quitar productos individualmente.
- `CartTotal` calcula el total con `reduce()`.
- Se utiliza renderizado condicional para resultados vacíos y carrito sin productos.

#### Estructura resumida

```text
sem08/
├── README.md
├── package.json
├── vite.config.js
├── public/products.json
└── src/
    ├── App.jsx
    ├── main.jsx
    └── components/
        ├── CartTotal.jsx
        ├── Counter.jsx
        ├── ProductList.jsx
        ├── ShoppingCart.jsx
        └── UserStatus.jsx
```

#### Ejemplo de carga con `useEffect`

```jsx
useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}products.json`)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .finally(() => setLoadingProducts(false));
}, []);
```

#### Ejemplo de botón condicional

```jsx
<button className="btn btn-primary mt-auto">
  {cart.some((item) => item.id === product.id)
    ? "En el carrito"
    : "Agregar al carrito"}
</button>
```

#### Archivos de la entrega

- [sem08/README.md](sem08/README.md)
- [sem08/package.json](sem08/package.json)
- [sem08/vite.config.js](sem08/vite.config.js)
- [sem08/src/App.jsx](sem08/src/App.jsx)
- [sem08/src/components](sem08/src/components)

#### Ejecución local

```bash
cd sem08
npm install
npm run dev -- --host 127.0.0.1 --port 5174
```

La aplicación fue verificada localmente en [http://127.0.0.1:5174/frontend01/sem08/](http://127.0.0.1:5174/frontend01/sem08/).

## Tecnologías utilizadas

| Tecnología      | Aplicación en el proyecto                                        |
| --------------- | ---------------------------------------------------------------- |
| HTML5           | Estructura semántica y accesibilidad básica                      |
| CSS3            | Variables, Grid, Flexbox, responsive, gradientes y glassmorphism |
| Bootstrap 5.3.3 | Navbar, Carousel, Grid, Cards, botones y controles de formulario |
| JavaScript ES6+ | DOM, eventos, validaciones, Fetch API y lógica de componentes    |
| React           | Componentes, JSX, hooks, estado y renderizado condicional        |
| Vite            | Servidor de desarrollo y compilación de los proyectos React      |
| React Hooks     | `useState` y `useEffect` para estados y efectos de Semana 8      |
| JSON/JS         | Fuente local de datos para los catálogos de Semana 5, 6, 7 y 8   |
| Unsplash        | Imágenes públicas del catálogo y carrusel                        |
| GitHub Pages    | Publicación del sitio estático                                   |

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
│   ├── README.md
│   ├── index.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── data/products.json
├── sem06/
│   ├── README.md
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── data/products.json
│       ├── img/
│       └── js/main.js
├── sem07/
│   ├── README.md
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── App.css
│       ├── index.css
│       ├── assets/
│       │   ├── products.js
│       │   └── styles.css
│       └── components/
│           ├── CartTotal.jsx
│           ├── Counter.jsx
│           ├── ProductList.jsx
│           ├── ShoppingCart.jsx
│           └── UserStatus.jsx
├── sem08/
│   ├── README.md
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/products.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── components/
│           ├── CartTotal.jsx
│           ├── Counter.jsx
│           ├── ProductList.jsx
│           ├── ShoppingCart.jsx
│           └── UserStatus.jsx
```

## Visualización local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/andreaendigital/frontend01.git
   ```

2. Para revisar una semana HTML, entra a su carpeta y abre `index.html` con Live Server. Por ejemplo:

   ```bash
   cd frontend01/sem04
   ```

3. Para ejecutar la semana 7, utiliza Vite:

   ```bash
   cd frontend01/sem07
   npm install
   npm run dev
   ```

4. Para ejecutar la semana 8, utiliza Vite en el puerto configurado:

```bash
cd frontend01/sem08
npm install
npm run dev -- --host 127.0.0.1 --port 5174
```

Las semanas 7 y 8 se ejecutan mediante Vite y necesitan conexión a Internet para cargar Bootstrap e imágenes desde CDN.

## Enlaces

- [Repositorio GitHub](https://github.com/andreaendigital/frontend01)
- [Semana 1](sem01/index.html)
- [Semana 2](sem02/index.html)
- [Semana 3](sem03/index.html)
- [Semana 4](sem04/index.html)
- [Semana 5](sem05/index.html)
- [Semana 6](sem06/index.html)
- [Semana 7](sem07/README.md)
- [Semana 8](sem08/README.md)

## Deploy por semana

- [Deploy Semana 1](https://andreaendigital.github.io/frontend01/sem01/index.html)
- [Deploy Semana 2](https://andreaendigital.github.io/frontend01/sem02/index.html)
- [Deploy Semana 3](https://andreaendigital.github.io/frontend01/sem03/index.html)
- [Deploy Semana 4](https://andreaendigital.github.io/frontend01/sem04/index.html)
- [Deploy Semana 5](https://andreaendigital.github.io/frontend01/sem05/index.html)
- [Deploy Semana 6](https://andreaendigital.github.io/frontend01/sem06/index.html)
- [Deploy Semana 7](https://andreaendigital.github.io/frontend01/sem07/)
- [Deploy Semana 8](https://andreaendigital.github.io/frontend01/sem08/)

## Evidencias por semana

Las evidencias responsive y capturas de cada avance se encuentran en el README correspondiente a cada semana:

- [Evidencias Semana 1](sem01/README.md)
- [Evidencias Semana 2](sem02/README.md)
- [Evidencias Semana 3](sem03/README.md)
- [Evidencias Semana 4](sem04/README.md)
- [Evidencias Semana 5](sem05/README.md)
- [Evidencias Semana 6](sem06/README.md)
- [Evidencias Semana 7](sem07/README.md)
- [Evidencias Semana 8](sem08/README.md)
