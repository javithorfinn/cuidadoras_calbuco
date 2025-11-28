import { addSharer } from "../components/hisotrySharer.mjs";
import { marqueeListeners } from "../utils/marqueeListeners.mjs";
import { stories } from "./constants.mjs";

// Contador regresivo hacia el 8 de noviembre, 11:00 AM
(function () {
  const el = document.getElementById("countdown");
  if (!el) return;
  const target = new Date("November 8, 2025 11:00:00").getTime();

  function tick() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      el.textContent = "8 de noviembre de 2025";
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    el.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }

  tick();
  setInterval(tick, 1000);
})();

// Carrusel del boletín
(function () {
  const carousel = document.querySelector(".purpose__gallery");
  const track = document.querySelector(".boletin-carousel-track");
  const slides = document.querySelectorAll(".boletin-carousel-slide");
  const prevBtn = document.querySelector(".boletin-carousel-prev");
  const nextBtn = document.querySelector(".boletin-carousel-next");
  const indicators = document.querySelectorAll(".boletin-carousel-indicator");

  if (!carousel || !track || !slides.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Función para actualizar el carrusel
  function updateCarousel() {
    const translateX = -currentSlide * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Ir a la siguiente imagen
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  // Ir a la imagen anterior
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Ir a una slide específica
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => goToSlide(index));
  });

  // Navegación con teclado
  document.addEventListener("keydown", function (e) {
    if (
      carousel.contains(document.activeElement) ||
      document.activeElement === document.body
    ) {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    }
  });

  // Inicializar
  updateCarousel();
})();

// Modal que sale al hacerle click a la imagen para mostrar texto del boletín
(function () {
  const modal = document.getElementById("boletinModal");
  const modalContent = document.getElementById("boletinModalContent");
  const modalClose = document.getElementById("boletinModalClose");
  const images = document.querySelectorAll(
    ".boletin-carousel-slide .boletin-media img"
  );
  const container = document.querySelector(".boletin-carousel-container");

  if (!modal || !modalContent || !modalClose) return;

  images.forEach((img) => {
    img.addEventListener("click", function () {
      const textType = this.getAttribute("data-text");
      const index = parseInt(this.getAttribute("data-index"));
      let textElement = null;

      // Buscar el elemento de texto correspondiente en el contenedor
      if (container) {
        const textElements = container.querySelectorAll(".boletin-text");
        if (textElements[index]) {
          if (textType === "quote") {
            textElement = textElements[index].querySelector(".boletin-quote");
          } else if (textType === "mensaje") {
            textElement = textElements[index].querySelector(".boletin-mensaje");
          }
        }
      }

      if (textElement) {
        modalContent.innerHTML = textElement.innerHTML;
        modal.classList.add("show");
      }
    });
  });

  // Cerrar modal
  modalClose.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  // Cerrar al hacer click fuera del modal
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
})();

addSharer();
marqueeListeners();
