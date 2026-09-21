document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#heroCarousel');

    if (carouselElement && window.bootstrap) {
        const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
            interval: 3000,
            ride: 'carousel',
            pause: 'hover',
            touch: true
        });

        carouselElement.addEventListener('slide.bs.carousel', (event) => {
            console.debug(`Carrusel: cambiando a la diapositiva ${event.to + 1}`);
        });

        carousel.cycle();
    }

    console.info('Pixel Arcade: Bootstrap y assets cargados correctamente.');
});
