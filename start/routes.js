'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
 
//////////////////////////////////////////////////
//Rutas oden de trabajo CRUD
//Ingresar orden trabajo
Route.post('ordenTrabajo/ingresarOrdenTrabajo', 'OrdenTrabajoController.ingresarOrdenesTrabajo')

//Consultar ordenes t.
Route.get('ordenTrabajo/consultarOrdenesTrabajo', 'OrdenTrabajoController.consultarOrdenTrabajo')

//Consultar orden por id
Route.get('ordenTrabajo/consultarOrdenTrabajoId/:ordenTrabajoId', 'OrdenTrabajoController.consultarOrdenTrabajoId')

//Actualizar orden t.
Route.put('ordenTrabajo/actualizarOrdenTrabajo/:ordenTrabajoId', 'OrdenTrabajoController.actualizarOrdenTrabajo')

//Eliminar orden t.
Route.put('ordenTrabajo/eliminarOrdenTrabajo/:ordenTrabajoId', 'OrdenTrabajoController.eliminarOrdenTrabajo')

//////////////////////////////////////////////////
//Rutas orden de Cliente CRUD
//Ingresar
Route.post('ordenCliente/ingresarOrdenCliente', 'OrdenClienteController.ingresarOrdenCliente')

//Consultar ordenes c.
Route.get('ordenCliente/consultarOrdenesCliente', 'OrdenClienteController.consultarOrdenCliente')

//Consultar orden por id
Route.get('ordenCliente/consultarOrdenClienteId/:ordenClienteId', 'OrdenClienteController.consultarOrdenClienteId')

//Actualizar orden c.
Route.put('ordenCliente/actualizarOrdenCliente/:ordenClienteId', 'OrdenClienteController.actualizarOrdenCliente')

//Eliminar orden c.
Route.put('ordenCliente/eliminarOrdenCliente/:ordenClienteId', 'OrdenClienteController.eliminarOrdenCliente')


//Consultar orden compra
Route.get('ordenTrabajo/consultarOrdenCompra', 'OrdenTrabajoController.consultarOrdenCompra')

//////////////////////////////////////////////////
//Rutas Guías de Remisión
//Ingresar guias r.
Route.post('guiaRemision/ingresarGuiaRemision', 'GuiasRemisionController.ingresarGuiaRemision')

//Consultar guias r.
Route.get('guiaRemision/consultarGuiasRemision', 'GuiasRemisionController.consultarGuiasRemision')

//Actualizar guias r.
Route.put('guiaRemision/actualizarGuiaRemision/:guiaremisionId', 'GuiasRemisionController.actualizarGuiaRemision')

//Eliminar guias r.
Route.put('guiaRemision/eliminarGuiaRemision/:guiaremisionId', 'GuiasRemisionController.eliminarGuiaRemision')