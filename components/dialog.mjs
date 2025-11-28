export const showDialog = ({ content }) => {
  const dialogContainer = document.createElement("div");
  const dialog = document.createElement("dialog");
  dialogContainer.classList.add("dialog-container");

  dialog.innerHTML = `<div class="dialog-container>${content}</div>`;

  document.body.appendChild(dialog, dialogContainer);

  const controller = new AbortController();

  const closeDialog = () => {
    dialog.style.animation = "slideOut .3s forwards ease-out";

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

  document.addEventListener(
    "click",
    (event) => {
      if (dialog && dialogContainer.contains(event.target)) {
        closeDialog();
      }
    },
    { signal: controller.signal }
  );
};
