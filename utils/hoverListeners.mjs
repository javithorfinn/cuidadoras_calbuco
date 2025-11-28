import { marquee } from "../js/constants.mjs";

export const pauseMarquee = () => {
  return (marquee.style.animationPlayState = "paused");
};

export const playMarquee = () => {
  return (marquee.style.animationPlayState = "running");
};
