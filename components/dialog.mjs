export const showDialog = async ({ content }, callback = () => {}) => {
  const dialog = document.createElement("dialog");
  const closeDialogIcon = document.createElement("span");

  document.body.appendChild(dialog);
  dialog.innerHTML = content;
  closeDialogIcon.classList.add("close__dialog__icon");
  closeDialogIcon.title = "Cerrar";
  closeDialogIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

  dialog.appendChild(closeDialogIcon);
  dialog.showModal();

  const controller = new AbortController();

  const closeDialog = () => {
    dialog.style.animation = "slideOut 0.4s forwards ease-out";

    dialog.addEventListener(
      "animationend",
      () => {
        dialog.close();
        dialog.remove();
        controller.abort();
      },
      { once: true, signal: controller.signal }
    );
  };

  callback();
  
  const firstChild = dialog.querySelector("section");

  document.addEventListener(
    "click",
    (event) => {
      if (
        dialog &&
        dialog.contains(event.target) &&
        !firstChild.contains(event.target)
      ) {
        closeDialog();
      }
    },
    { signal: controller.signal }
  );
};
