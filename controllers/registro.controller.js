/**
 * Controlador encargado del registro de los clientes.
 *
 * @author Juan Carlos Estevez Vargas
 */
import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

/**
 * Llama la función encargada de crear clientes cuando se envíe el
 * formulario de registro.
 */
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .crearCliente(nombre, email)
    .then(() => (window.location.href = "/screens/registro_completado.html"))
    .catch((error) => console.log(error));
});
