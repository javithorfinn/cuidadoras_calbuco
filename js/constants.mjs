const stories = document.querySelectorAll(".stories .story-card");
const marquee = document.getElementById("marquee");
const menuNavContainer = document.getElementById("menu-responsive-container");
const menuNavResponsive = document.getElementById("menu-nav-responsive");
const menuButton = document.querySelector(".header__toggle");
const menuContainer = document.querySelector(".menu-responsive-container");
const closeButton = document.querySelector(".menu-responsive-close");
const menuLinks = document.querySelectorAll(".menu-responsive-items .header__nav-item a");
const wapContact = document.getElementById("wap-contact");
const donationButtons = document.querySelectorAll(".donation-button");
const copyBtn = document.getElementById("copyBtn");
const textContent = `
    Banco: BancoEstado
    Tipo de cuenta: Chequera Electrónica
    N° de cuenta: 82970384819
    RUT: 65.217.113-3
    Nombre: AGRUPACION DE CUIDADORAS SOÑANDO POR UN FUTURO MEJOR
    Correo: cuidadorascalbucospfm@gmail.com
    Asunto: "Colaboración para las cuidadoras"
    `;

export {
  stories,
  marquee,
  menuButton,
  menuNavContainer,
  menuNavResponsive,
  menuContainer,
  closeButton,
  menuLinks,
  wapContact,
  donationButtons,
  copyBtn,
  textContent
};
