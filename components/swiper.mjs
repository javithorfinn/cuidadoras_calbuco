import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

const swiper = new Swiper(".swiper", {
  // Parámetros opcionales
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 25,
  
  // Flechas de navegación
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export { swiper }