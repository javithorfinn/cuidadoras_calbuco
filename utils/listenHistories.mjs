import { showDialog } from "../components/dialog.mjs";
import { stories } from "../js/constants.mjs";

export const listenHistories = () => {
  stories.forEach((story) => {
    const button = document.createElement("button");
    story.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play">
        <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>`;
    button.innerHTML = "Ver Más";
    button.classList.add("history__button");
    story.appendChild(button);

    const svg = story.querySelector("svg");
    const title = story.querySelector("h3");

    button.title = `Ver más acerca de ${title.innerText}`

    svg.onclick = () => {
      showDialog({
        content: `
          <section>
            <iframe 
            src="${story.dataset.url}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </section>
        `,
      });
    };

    // En este botón se podría mostrar más adelante información tipo blog
    button.onclick = () => {
        showDialog({
          content: `
            <section>
              <iframe 
              src="${story.dataset.url}" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </section>
          `,
        });
      };
  });
};
