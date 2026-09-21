let products = [];
let cart = [];

const formatPrice = (price) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

async function fetchProducts() {
  const response = await fetch("./assets/data/products.json");

  if (!response.ok) {
    throw new Error(`No se pudo cargar el catálogo: ${response.status}`);
  }

  return response.json();
}

function createProductCard(product) {
  const column = document.createElement("div");
  column.className = "col-12 col-md-6 col-lg-4";

  const card = document.createElement("article");
  card.className = "card product-card h-100";

  const image = document.createElement("img");
  image.className = "card-img-top";
  image.src = product.image;
  image.alt = product.alt;
  image.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card-body d-flex flex-column";

  const title = document.createElement("h3");
  title.className = "card-title h4";
  title.textContent = product.name;

  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = product.description;

  const price = document.createElement("p");
  price.className = "product-price fw-bold";
  price.textContent = formatPrice(product.price);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "btn btn-primary mt-auto";
  addButton.dataset.productName = product.name;
  addButton.textContent = "Agregar al carrito";

  body.appendChild(title);
  body.appendChild(description);
  body.appendChild(price);
  body.appendChild(addButton);
  card.appendChild(image);
  card.appendChild(body);
  column.appendChild(card);

  return column;
}

function renderProducts(productList) {
  const productGrid = document.querySelector("#productGrid");
  productGrid.replaceChildren();

  if (productList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "text-warning";
    emptyMessage.textContent = "No encontramos productos con esa búsqueda.";
    productGrid.appendChild(emptyMessage);
    return;
  }

  productList.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });
}

function renderCart() {
  const cartItems = document.querySelector("#cartItems");
  const cartCount = document.querySelector("#cartCount");
  const cartSummary = document.querySelector("#cartSummary");
  const cartTotal = document.querySelector("#cartTotal");
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = itemCount;
  cartSummary.textContent = `${itemCount} producto${itemCount === 1 ? "" : "s"}`;
  cartTotal.textContent = formatPrice(total);
  cartItems.replaceChildren();

  if (cart.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "text-secondary mb-0";
    emptyMessage.textContent = "Tu carrito está vacío.";
    cartItems.appendChild(emptyMessage);
    return;
  }

  cart.forEach((item) => {
    const itemRow = document.createElement("div");
    itemRow.className =
      "cart-item d-flex justify-content-between align-items-center gap-3 py-2";

    const itemInfo = document.createElement("div");
    const itemName = document.createElement("strong");
    itemName.textContent = item.name;
    const itemDetails = document.createElement("small");
    itemDetails.className = "d-block text-secondary";
    itemDetails.textContent = `${item.quantity} x ${formatPrice(item.price)}`;
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDetails);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn btn-sm btn-outline-warning";
    removeButton.dataset.removeProduct = item.name;
    removeButton.textContent = "Quitar";

    itemRow.appendChild(itemInfo);
    itemRow.appendChild(removeButton);
    cartItems.appendChild(itemRow);
  });
}

function addToCart(productName) {
  const product = products.find((item) => item.name === productName);
  const existingItem = cart.find((item) => item.name === productName);

  if (!product) return;

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(productName) {
  const itemIndex = cart.findIndex((item) => item.name === productName);

  if (itemIndex === -1) return;

  if (cart[itemIndex].quantity > 1) {
    cart[itemIndex].quantity -= 1;
  } else {
    cart.splice(itemIndex, 1);
  }

  renderCart();
}

async function loadProducts() {
  const productsStatus = document.querySelector("#productsStatus");

  try {
    productsStatus.textContent = "Cargando productos...";
    products = await fetchProducts();
    renderProducts(products);
    productsStatus.textContent = `${products.length} productos cargados correctamente.`;
    productsStatus.className = "products-status text-success";
  } catch (error) {
    productsStatus.textContent =
      "No fue posible cargar los productos. Intenta nuevamente más tarde.";
    productsStatus.className = "products-status text-warning";
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.querySelector("#heroCarousel");
  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchInput");
  const productGrid = document.querySelector("#productGrid");

  loadProducts();
  renderCart();

  if (carouselElement && window.bootstrap) {
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 3000,
      ride: "carousel",
      pause: "hover",
      touch: true,
    });
    carousel.cycle();
  }

  productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-product-name]");
    if (addButton) addToCart(addButton.dataset.productName);
  });

  document.querySelector("#cartItems").addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-product]");
    if (removeButton) removeFromCart(removeButton.dataset.removeProduct);
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredProducts = products.filter((product) =>
      `${product.name} ${product.description}`
        .toLowerCase()
        .includes(searchTerm),
    );
    renderProducts(filteredProducts);
  });
});
