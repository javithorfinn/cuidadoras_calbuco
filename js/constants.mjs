const stories = document.querySelectorAll(".stories .story-card");
const marquee = document.getElementById("marquee");
const menuNavContainer = document.getElementById("menu-responsive-container");
const menuNavResponsive = document.getElementById("menu-nav-responsive");
const menuButton = document.querySelector(".header__toggle");
const menuContainer = document.querySelector(".menu-responsive-container");
const closeButton = document.querySelector(".menu-responsive-close");
const menuLinks = document.querySelectorAll(".menu-responsive-items .header__nav-item a");

export { stories, marquee, menuButton, menuNavContainer, menuNavResponsive, menuContainer, closeButton, menuLinks };
