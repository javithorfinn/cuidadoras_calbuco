import { initCarrousel } from "../components/carrusel.mjs";
import { initMenuResponsive } from "../components/menuResponsive.mjs";
import { listenDonationsButtons } from "../utils/listenDonationsButtons.mjs";
import { listenHistories } from "../utils/listenHistories.mjs";
import { marqueeListeners } from "../utils/marqueeListeners.mjs";
import { whatsappSender } from "../utils/wapSender.mjs";
import { wapContact } from "./constants.mjs";

document.addEventListener("DOMContentLoaded", () => {
  initMenuResponsive();
  initCarrousel();
  wapContact.onclick = () => {
    // Acá se podría cambiar de número de whatsapp (Angélica por defecto)
    whatsappSender({ number: "56996329550" });
  };
  listenDonationsButtons();
  listenHistories();
  marqueeListeners();
});
