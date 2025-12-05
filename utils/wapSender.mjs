export const whatsappSender = ({ number }) => {
    const text = "Hola! Quisiera formar parte de éste emprendimiento mi nombre es ";
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${number}?text=${encoded}`;
    return window.open(url);
}