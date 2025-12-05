import { donationButtons } from "../js/constants.mjs";
import { showDialog } from "../components/dialog.mjs";
import { copyContent } from "../components/copyContent.mjs";

export const listenDonationsButtons = () => {
  donationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showDialog({
        content: `
        <section class="transfer-wrapper">
        <div class="transfer-card">
        <h1>Datos para Transferencia Bancaria</h1>
        <p style="border-bottom: 1px solid #eee; padding-bottom: 16px;">Usa estos datos para transferir tu aporte o colaboración:</p>
        <div>
        <h3>Cuenta Bancaria</h3>
        <p><strong>Banco:</strong> BancoEstado</p>
        <p><strong>Tipo de cuenta:</strong> Chequera Electrónica</p>
        <p><strong>N° de cuenta:</strong> 82970384819</p>
        <p><strong>RUT:</strong> 65.217.113-3</p>
        <p><strong>Nombre:</strong> AGRUPACION DE CUIDADORAS SOÑANDO POR UN FUTURO MEJOR</p>
        <p><strong>Correo:</strong> cuidadorascalbucospfm@gmail.com</p>
        <p><strong>Asunto:</strong> “Colaboración para las cuidadoras”</p>
        </div>
        <p>Envía el comprobante a nuestro correo o por WhatsApp al <strong>+56 9 9632 9550</strong>.</p>
        </div>
        </section>
        `,
      }, async () => {
        const dialog = document.querySelector("dialog");
        const firstChild = dialog.querySelector("section");

        const { copyContentBtn, copiedContent } = await copyContent();

        firstChild.appendChild(copyContentBtn);
        firstChild.appendChild(copiedContent);
      });
    });
  });
};
