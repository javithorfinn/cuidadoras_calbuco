import { textContent } from "../js/constants.mjs";
import { copyToClipBoard } from "../utils/copyToClipBoard.mjs";

export const copyContent = async () => {
  const copyContentBtn = document.createElement("button");
  const copiedContent = document.createElement("span");
  
  copyContentBtn.classList.add("copy__content__btn");
  copyContentBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-copy-icon lucide-clipboard-copy"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M16 4h2a2 2 0 0 1 2 2v4"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/></svg> Copiar al portapapeles!`;
  copiedContent.classList.add("copied__content");
  copiedContent.innerHTML = "✅ Contenido copiado al portapapeles!!";

  copyContentBtn.onclick = async () => {
    await copyToClipBoard(textContent);
    copiedContent.style.display = "flex";
    setTimeout(() => (copiedContent.style.display = "none"), 2000);
  };

  return { copyContentBtn, copiedContent };
};
