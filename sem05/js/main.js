async function fetchProducts() {
  const response = await fetch("./data/products.json");

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

  const link = document.createElement("a");
  link.className = "btn btn-primary mt-auto align-self-start";
  link.href = "#contacto";
  link.textContent = "Consultar producto";

  body.appendChild(title);
  body.appendChild(description);
  body.appendChild(link);
  card.appendChild(image);
  card.appendChild(body);
  column.appendChild(card);

  return column;
}

function bindProductCardEvents(productGrid) {
  productGrid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("is-hovered");
      card.setAttribute("data-interaction", "Producto destacado");
    });

    card.addEventListener("mouseout", () => {
      card.classList.remove("is-hovered");
      card.removeAttribute("data-interaction");
    });
  });
}

async function loadProducts(productGrid, productsStatus) {
  productsStatus.textContent = "Cargando productos desde el archivo JSON...";

  try {
    const products = await fetchProducts();
    productGrid.replaceChildren();

    products.forEach((product) => {
      productGrid.appendChild(createProductCard(product));
    });

    bindProductCardEvents(productGrid);
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
  const recommendationButton = document.querySelector("#recommendationButton");
  const dynamicContent = document.querySelector("#dynamicContent");
  const contactForm = document.querySelector(".contact-form");
  const productGrid = document.querySelector("#productGrid");
  const productsStatus = document.querySelector("#productsStatus");

  if (productGrid && productsStatus) {
    loadProducts(productGrid, productsStatus);
  }

  if (carouselElement && window.bootstrap) {
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 3000,
      ride: "carousel",
      pause: "hover",
      touch: true,
    });

    carouselElement.addEventListener("slide.bs.carousel", (event) => {
      console.debug(`Carrusel: cambiando a la diapositiva ${event.to + 1}`);
    });

    carousel.cycle();
  }

  // Crea y alterna contenido sin recargar la página.
  recommendationButton?.addEventListener("click", () => {
    const existingRecommendation = document.querySelector(
      "#dynamicContent .recommendation-card",
    );

    if (existingRecommendation) {
      existingRecommendation.remove();
      recommendationButton.textContent = "Mostrar recomendación";
      return;
    }

    const recommendation = document.createElement("article");
    recommendation.className = "recommendation-card p-4 rounded-3";

    const title = document.createElement("h3");
    title.className = "h5";
    title.textContent = "Recomendación para tu setup";

    const description = document.createElement("p");
    description.className = "mb-0";
    description.textContent =
      "Combina el Gamepad Pro Wireless con los Auriculares Gamer 7.1 para disfrutar mayor precisión y sonido envolvente.";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn btn-sm btn-outline-light mt-3";
    removeButton.textContent = "Ocultar recomendación";
    removeButton.addEventListener("click", () => {
      recommendation.remove();
      recommendationButton.textContent = "Mostrar recomendación";
    });

    recommendation.appendChild(title);
    recommendation.appendChild(description);
    recommendation.appendChild(removeButton);
    dynamicContent.appendChild(recommendation);
    recommendationButton.textContent = "Ocultar recomendación";
  });

  // Valida y notifica el formulario sin enviarlo a un servidor inexistente.
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.querySelector("#nombre");
    const email = contactForm.querySelector("#email");
    const message = contactForm.querySelector("#mensaje");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let statusMessage = contactForm.querySelector(".form-status");

    if (!statusMessage) {
      statusMessage = document.createElement("p");
      statusMessage.className = "form-status mt-3 mb-0";
      statusMessage.setAttribute("role", "status");
      statusMessage.setAttribute("aria-live", "polite");
      contactForm.appendChild(statusMessage);
    }

    if (
      !name.value.trim() ||
      !emailPattern.test(email.value.trim()) ||
      !message.value.trim()
    ) {
      statusMessage.className = "form-status form-status-error mt-3 mb-0";
      statusMessage.textContent =
        "Completa tu nombre, un correo válido y el mensaje antes de enviar.";
      return;
    }

    statusMessage.className = "form-status form-status-success mt-3 mb-0";
    statusMessage.textContent = `Gracias, ${name.value.trim()}. Recibimos tu consulta correctamente.`;
    contactForm.reset();
  });

  console.info("Pixel Arcade: Bootstrap y assets cargados correctamente.");
});
