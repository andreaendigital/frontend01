# Pixel Arcade - Semana 7

## Evolución del proyecto

Durante la semana 7, Pixel Arcade evolucionó desde una página HTML con JavaScript imperativo hacia una aplicación React organizada con Vite.

En las semanas anteriores, el catálogo y el carrito se actualizaban buscando elementos del DOM y modificando su contenido manualmente. En esta versión, React administra el estado y vuelve a renderizar los componentes cuando cambian los datos.

La interfaz gráfica se conservó con Bootstrap 5.3 y los estilos personalizados de Pixel Arcade. La principal modificación corresponde a la organización interna del código: ahora la aplicación está separada en componentes reutilizables.

## Migración a Vite

Vite es el servidor de desarrollo y herramienta de compilación del proyecto. Permite trabajar con JSX, importar componentes, separar estilos y generar una versión optimizada para producción.

Archivos principales de configuración:

- `package.json`: dependencias y comandos del proyecto.
- `vite.config.js`: configuración de Vite y del plugin React.
- `index.html`: documento base con el elemento `#root`.
- `src/main.jsx`: punto de entrada que renderiza `<App />`.
- `src/App.jsx`: componente principal de la aplicación.

## Estructura del proyecto

```text
sem07/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── products.js
│   │   └── styles.css
│   └── components/
│       ├── CartTotal.jsx
│       ├── Counter.jsx
│       ├── ProductList.jsx
│       ├── ShoppingCart.jsx
│       └── UserStatus.jsx
└── node_modules/
```

La carpeta `node_modules` se genera automáticamente con `npm install`. No se edita manualmente ni se recomienda subirla al repositorio.

## Componentes implementados

### `App.jsx`

Es el componente principal. Integra la navegación, el carrusel, el catálogo, el carrito y el formulario de contacto. También mantiene el número total de productos para enviarlo al componente `Counter`.

### `ProductList.jsx`

Importa el arreglo de productos y utiliza `.map()` para crear una card por producto. Cada producto contiene `id`, `name`, `price`, `offerPrice`, `description` e `image`.

El botón de cada card ejecuta `onAddToCart(product)` y envía el producto al componente que administra el carrito.

### `ShoppingCart.jsx`

Es el componente responsable del estado del carrito:

- `useState` mantiene el arreglo `cart`.
- `addToCart` agrega el producto como una entrada independiente.
- Cada entrada recibe un `uniqueId`.
- `removeFromCart` elimina solamente la entrada seleccionada.
- El buscador actualiza `searchTerm` y filtra el catálogo.
- Integra `ProductList`, `CartTotal`, `Counter` y `UserStatus`.

### `CartTotal.jsx`

Calcula el total mediante `.reduce()` y muestra la suma de los precios de oferta:

```jsx
function CartTotal({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.offerPrice, 0);

  return <h3>Total: {total}</h3>;
}
```

### `Counter.jsx`

Se utiliza en la barra de navegación para mostrar el número total de entradas del carrito:

```jsx
function Counter({ count }) {
  return <span className="badge text-bg-warning">{count}</span>;
}
```

En `App.jsx` se utiliza así:

```jsx
<Counter count={cartCount} />
```

### `UserStatus.jsx`

Es pertinente porque centraliza los mensajes de estado del catálogo. Puede informar si los productos están cargando, si ocurrió un error o cuántos productos están disponibles.

## Renderizado condicional

El renderizado condicional permite mostrar una interfaz diferente según el estado de la aplicación, sin manipular el DOM manualmente.

### En `ProductList.jsx`

Cuando el filtro no encuentra productos, se muestra un mensaje alternativo:

```jsx
if (filteredProducts.length === 0) {
  return (
    <p className="text-warning">No encontramos productos con esa búsqueda.</p>
  );
}
```

Cuando existen resultados, se renderizan las cards con `.map()`:

```jsx
return (
  <div className="row g-4">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
```

### En `ShoppingCart.jsx`

El carrito muestra un mensaje cuando está vacío y las entradas cuando contiene productos:

```jsx
{
  cart.length === 0 ? (
    <p>Tu carrito está vacío.</p>
  ) : (
    cart.map((product) => (
      <div key={product.uniqueId}>
        <strong>{product.name}</strong>
        <button onClick={() => removeFromCart(product.uniqueId)}>Quitar</button>
      </div>
    ))
  );
}
```

También se utiliza renderizado condicional para el contador singular o plural:

```jsx
{cart.length} producto{cart.length === 1 ? "" : "s"}
```

## Estados utilizados

- `cart`: productos agregados al carrito.
- `cartCount`: cantidad mostrada en la navegación.
- `searchTerm`: texto utilizado para filtrar productos.
- `loading` y `error`: estados contemplados por `UserStatus` para mostrar información al usuario.

Cuando el estado cambia, React actualiza automáticamente la parte correspondiente de la interfaz.

## Comandos de instalación y ejecución

Desde la carpeta raíz del repositorio:

```bash
cd sem07
npm install
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Para crear una compilación de producción:

```bash
npm run build
```

Para previsualizar esa compilación:

```bash
npm run preview
```

Este proyecto utiliza Vite, por lo tanto el comando correcto para desarrollo es `npm run dev`. `npm start` corresponde normalmente a Create React App y no está definido en este proyecto. No se debe ejecutar `npx create-react-app sem07` sobre esta carpeta porque reemplazaría la estructura React ya creada.

## Resultado esperado

Al abrir la aplicación se puede:

1. Visualizar el listado de productos con nombre, descripción, imagen, precio normal y precio oferta.
2. Buscar productos por nombre o descripción.
3. Agregar varias unidades, manteniendo cada entrada como un elemento independiente.
4. Ver el contador actualizado en la navegación.
5. Ver el total acumulado del carrito.
6. Eliminar una entrada específica sin afectar las demás.
7. Ver mensajes diferentes cuando no hay productos o cuando el carrito está vacío.

## Tecnologías

| Tecnología    | Uso                                           |
| ------------- | --------------------------------------------- |
| React         | Componentes, estado y renderizado declarativo |
| Vite          | Servidor de desarrollo y compilación          |
| JSX           | Estructura de los componentes React           |
| React Hooks   | `useState` para manejar estados simples       |
| Bootstrap 5.3 | Grid, navbar, cards y responsive              |
| CSS3          | Identidad visual de Pixel Arcade              |
| JavaScript    | `.map()`, `.filter()`, `.reduce()` y eventos  |
