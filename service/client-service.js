/**
 * Servicio encargado de realizar las operaciones CRUD de un cliente
 * utilizando como base de datos un archivo .JSON y json-server
 */

/**
 * Obtiene un listado con los clientes registrados en el sistema.
 *
 * @author Juan Carlos Estevez Vargas
 * @returns listado de clientes obtenida del servidor.
 */
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

/**
 * Crea un cliente y lo almacena en el sistema (db).
 *
 * @param {String} nombre
 * @param {String} email
 * @returns Cliente ingresado.
 */
const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

/**
 * Elimina un cliente de la base de datos.
 *
 * @author Juan Carlos Estevez Vargas
 * @param {String} id mediante el cual se eliminará el cliente.
 * @returns
 */
const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

/**
 * Busca y obtiene los detalles de un cliente en específico.
 *
 * @author Juan Carlos Estevez Vargas
 * @param {String} id mediante el cual se buscará la información.
 * @returns datos del cliente solicitado.
 */
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((response) =>
    response.json()
  );
};

/**
 * Actualiza un cliente en la base de datos mediante fetch.
 *
 * @author Juan Carlos Estevez Vargas
 * @param {String} nombre
 * @param {String} email
 * @param {String} id
 * @returns data actualizada en caso de OK, página de error en caso de error.
 */
const actualizarClient = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email }),
  })
    .then((response) => response)
    .catch(() => (window.location.href = "/screens/error.html"));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarClient,
};
