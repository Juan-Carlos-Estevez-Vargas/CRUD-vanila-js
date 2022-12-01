import { clientServices } from "../service/client-service.js";

/**
 * Controlador encargado de la actualización de los datos de los clientes.
 *
 * @author Juan Carlos Estevez Vargas
 */

const formulario = document.querySelector("[data-form]");

/**
 * Obtiene la información de un cliente en específico.
 */
const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) window.location.href = "/screens/error.html";

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  try {
    const perfil = await clientServices.detalleCliente(id);
    nombre.value = perfil.nombre;
    email.value = perfil.email;
  } catch (error) {
    window.location.href = "/screens/error.html";
  }
};

obtenerInformacion();

/**
 * Llama a función encargada de actualizar un cliente cuando se envíe el formulario
 * de actualización.
 */
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;

  clientServices
    .actualizarClient(nombre, email, id)
    .then(() => (window.location.href = "/screens/edicion_concluida.html"))
    .catch(() => (window.location.href = "/screens/error.html"));
});
