export const initCarrousel = () => {
  let carrousel = document.querySelector(".featured_carrousel .carrousel");
  if (!carrousel) return;

  let imgs = Array.from(carrousel.querySelectorAll("img"));
  if (imgs.length < 2) return;

  let index = 0;

  imgs.forEach((img) => {
    img.classList.remove("active");
  });

  imgs[index].classList.add("active");

  let interval = null;

  function startInterval() {
    interval = setInterval(() => {
      imgs[index].classList.remove("active");
      index = (index + 1) % imgs.length;
      imgs[index].classList.add("active");
    }, 4000);
  }

  startInterval();

  const container = carrousel.parentElement || carrousel;

  container.addEventListener("mouseenter", () => {
    if (interval) clearInterval(interval);
    interval = null;
  });

  container.addEventListener("mouseleave", () => {
    if (!interval) startInterval();
  });
};
