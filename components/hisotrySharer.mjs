import { stories } from "../js/constants.mjs";
import { shareContent } from "../utils/shareContent.mjs";

export const addSharer = () => {
  stories.forEach((story) => {
    const historyContent = story.querySelector(".story-card__content");

    const titleEl = historyContent.querySelector("h3");
    const textEl = historyContent.querySelector("p");

    const shareButton = document.createElement("button");

    shareButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round">
          <path d="M12 2v13"/>
          <path d="m16 6-4-4-4 4"/>
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      </svg>
    `;

    shareButton.style.float = "right";

    shareButton.onclick = async () => {
      const title = titleEl.innerText;
      const text = textEl.innerText;
      await shareContent({ title, text });
    };

    historyContent.appendChild(shareButton);
  });
};
