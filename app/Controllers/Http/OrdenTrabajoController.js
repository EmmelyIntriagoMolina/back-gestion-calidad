'use strict'
const Database = use('Database')
const moment = require('moment')


class OrdenTrabajoController { 

    //Ingresar
    async ingresarOrdenesTrabajo({request, params, response}){
        try{

            let codigo = request.input('codigo').toUpperCase();
            let ordenCompra = request.input('ordencompra');
            let fechaRegistro = moment().format('YYYY-MM-DD');
            let horaRecepcion = moment().format('mm:ss');
            let proveedor = request.input('proveedor');
            let procedencia = request.input('procedencia').toUpperCase();
            let piscina = request.input('piscina');
            let producto = request.input('producto').toUpperCase();
            let camaronMar = request.input('camaronMar');
            let observacion = request.input('observacion');
            let estado = 1;
            let estadoCalidad = "EN ESPERA";

            const existe = await Database.raw("select ordencompra, fecharegistro, horaRecepcion, proveedor, procedencia, piscina, producto, camaronMar, observacion , estado, estadoCalidad from ordenTrabajo where codigo='"+codigo+"'")

            if(existe[0].length >=1){

                return response.status(200).send({message: 'La orden de trabajo que intenta ingresar ya existe'})
            }
            else {

                const ordenTrabajo = await Database.raw("insert into ordenTrabajo (codigo, ordenCompra, fecharegistro, horaRecepcion, proveedor, procedencia, piscina, producto, camaronMar, observacion, estado, estadoCalidad) values ('"+codigo+"','"+ordenCompra+"', '"+fechaRegistro+"', '"+horaRecepcion+"', '"+proveedor+"', '"+procedencia+"', '"+piscina+"', '"+producto+"', '"+camaronMar+"', '"+observacion+"', '"+estado+"', '"+estadoCalidad+"' )")
                return response.status(200).send({message: 'Se ha registrado la orden de trabajo correctamente', ordenTrabajo:ordenTrabajo[0]})
            
            }

        }catch (error) {

            console.log("No añadido ", error)
        }
    }

    //Consultar
    async consultarOrdenTrabajo({request, params, response}){
        try {

            const ordenTrabajo = await Database.raw("select codigo, fecharegistro,  proveedor, lote, estadoCalidad from ordenTrabajo where estado = 1 order by 1 desc;")
            return response.status(200).send({ordenTrabajo:ordenTrabajo[0]})

        } catch (error) {

            return error
        }
    }


    //Consultar Orden Compra
    async consultarOrdenCompra({request, params, response}){
        try {

            const ordenesCompra = await Database.raw("select codigo from ordenCompra;")
            return ordenesCompra[0]

        } catch (error) {

            return error
        }
    }

    //Consultar por Id
    async consultarOrdenTrabajoId({request, params, response}){
        try {
            
            const{ordenTrabajoId} = request.params;
            const ordenTrabajo = await Database.raw("select codigo, fecharegistro,  proveedor, lote, estadoCalidad from ordenTrabajo where id= '"+ordenTrabajoId+"' " )

            return response.status(200).send({ordenTrabajo:ordenTrabajo[0]})

        } catch (error) {

            return error
            
        }
    }

    //Actualizar
    async actualizarOrdenTrabajo({request, params, response}){
        try {
            
            const {ordenTrabajoId} = request.params;            
            let ordenCompra = request.input('ordencompra').toUpperCase();
            let fechaRegistro = moment().format('YYYY-MM-DD');
            let horaRecepcion = moment().format('HH:mm:ss');
            let proveedor = request.input('proveedor').toUpperCase();
            let procedencia = request.input('procedencia').toUpperCase();
            let piscina = request.input('piscina');
            let producto = request.input('producto').toUpperCase();
            let camaronMar = request.input('camaronMar');
            let observacion = request.input('observacion').toUpperCase();
            let estadoCalidad = request.input('estadoCalidad').toUpperCase();
            let estado = request.input('estado');
            
            const ordenTrabajo = await Database.raw("update ordenTrabajo set ordenCompra='"+ordenCompra+"', fechaRegistro= '"+fechaRegistro+"', horaRecepcion= '"+horaRecepcion+"', proveedor= '"+proveedor+"', procedencia= '"+procedencia+"', piscina='"+piscina+"', producto= '"+producto+"', camaronMar='"+camaronMar+"', observacion= '"+observacion+"', estadoCalidad= '"+estadoCalidad+"', estado= '"+estado+"' where id='"+ordenTrabajoId+"' ")

            return response.status(200).send({message: 'Se ha actualizado la orden de trabajo correctamente', ordenTrabajo:ordenTrabajo[0]})

        } catch (error) {
            
            console.log("Orden de trabajo no actualizada", error)
            
        }
    }

    //Eliminar
    async eliminarOrdenTrabajo({request, params, response}){
        try {
            
            let estado = 0;
            const {ordenTrabajoId} = request.params;
            const ordenTrabajo = await Database.raw("update ordenTrabajo set estado='"+estado+"' where codigo='"+ordenTrabajoId+"'  ")
            
            return response.status(200).send({message: 'Se ha eliminado la orden de trabajo correctamente'})

        } catch (error) {

            console.log("Orden de trabajo no eliminada", error)

        }
    }
}

module.exports = OrdenTrabajoController