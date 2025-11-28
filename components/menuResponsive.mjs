import {
  menuButton,
  menuContainer,
  closeButton,
  menuLinks,
} from "../js/constants.mjs";

export const initMenuResponsive = () => {
  menuButton.addEventListener("click", () => {
    menuContainer.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  closeButton.addEventListener("click", () => {
    menuContainer.classList.remove("show");
    document.body.style.overflow = "";
  });

  menuContainer.addEventListener("click", (e) => {
    if (e.target === menuContainer) {
      menuContainer.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuContainer.classList.remove("show");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuContainer.classList.contains("show")) {
      menuContainer.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
};
