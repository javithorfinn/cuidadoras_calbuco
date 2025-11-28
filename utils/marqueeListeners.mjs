import { marquee } from "../js/constants.mjs";
import { pauseMarquee, playMarquee } from "./hoverListeners.mjs";

export const marqueeListeners = () => {
  marquee.addEventListener("mouseenter", pauseMarquee);
  marquee.addEventListener("mouseleave", playMarquee);
};
