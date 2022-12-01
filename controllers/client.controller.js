import { clientServices } from "../service/client-service.js";

/**
 * Crea una nueva línea en la tabla HTML mostrando los datos del cliente.
 *
 * @author Juan Carlos Estevez Vargas
 * @param {String} nombre
 * @param {String} email
 * @param {uuid} id
 * @returns línea con los datos del cliente.
 */
const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
              >Editar</a
            >
          </li>
          <li>
            <button
              class="simple-button simple-button--delete"
              type="button"
              id="${id}"
            >
              Eliminar
            </button>
          </li>
        </ul>
      </td>`;
  linea.innerHTML = contenido;

  const btn = linea.querySelector("button");

  /**
   * Al hacer click sobre el botón eliminar se elimina el cliente.
   */
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .eliminarCliente(id)
      .then(() => alert("Cliente eliminado con éxito"))
      .catch(() => alert("Ocurrió un error"));
  });

  return linea;
};

const table = document.querySelector("[data-table]");

/**
 * Lista los clientes existentes en el sistema.
 */
clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch(() => alert("Ocurrió un error"));
