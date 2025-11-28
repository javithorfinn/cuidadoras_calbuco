export const shareContent = async ({ title, text }) =>
  await navigator
    .share({ title, text, url: window.location.href })
    .catch((err) => console.error(err));
