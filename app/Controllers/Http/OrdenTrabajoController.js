'use strict'
const Database = use('Database')
const moment = require('moment')


class OrdenTrabajoController { 

    //Ingresar
    async ingresarOrdenesTrabajo({request, params, response}){
        try{

            let codigo = request.input('codigo');
            let ordenCompra = request.input('ordencompra');
            let fechaRegistro = request.input('fechaRegistro')
            let horaRecepcion = request.input('horaRecepcion')
            let proveedor = request.input('proveedor');
            let procedencia = request.input('procedencia').toUpperCase();
            let piscina = request.input('piscina');
            let producto = request.input('producto').toUpperCase();
            let camaronMar = request.input('camaronMar');
            let observacion = request.input('observacion');
            let tipoproductoC = request.input('tipoproductoC');
            let tipoproductoD = request.input('tipoproductoD');
            let estado = 1;
            let estadoCalidad = "SIN ATENDER";
            let calidad = request.input('calidad');

            const existe = await Database.raw("select ordencompra, fechaRegistro, horaRecepcion, proveedor, procedencia, piscina, producto, camaronMar, observacion, tipoproductoC, tipoproductoC , estado, estadoCalidad, calidad from ordenTrabajo where codigo='"+codigo+"'")

            if(existe[0].length >=1){

                return response.status(200).send({message: 'La orden de trabajo que intenta ingresar ya existe'})
            }
            else {

                const ordenTrabajo = await Database.raw("insert into ordenTrabajo (ordenCompra, fechaRegistro, horaRecepcion, proveedor, procedencia, piscina, producto, tipoproductoC, tipoproductoD,camaronMar, observacion, estado, estadoCalidad, calidad) values ('"+ordenCompra+"', '"+fechaRegistro+"', '"+horaRecepcion+"', '"+proveedor+"', '"+procedencia+"', '"+piscina+"', '"+producto+"', '"+tipoproductoC+"', '"+tipoproductoD+"','"+camaronMar+"', '"+observacion+"', '"+estado+"', '"+estadoCalidad+"', '"+calidad+"' )")
                return response.status(200).send({message: 'Se ha registrado la orden de trabajo correctamente', ordenTrabajo:ordenTrabajo[0]})
            
            }

        }catch (error) {

            console.log("No añadido ", error)
        }
    }

    //Consultar
    async consultarOrdenTrabajo({request, params, response}){
        try {

            const ordenTrabajo = await Database.raw("select id, codigo, fechaRegistro, horaRecepcion, proveedor, lote, estadoCalidad, piscina, producto, ordencompra, tipoProductoC,tipoProductoD , observacion, procedencia from ordenTrabajo where estado = 1 order by 1 desc;")
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
            const ordenTrabajo = await Database.raw("select id, codigo, fechaRegistro, horaRecepcion, proveedor, lote, estadoCalidad, piscina, producto, ordencompra, tipoproductoC, tipoproductoD , observacion, procedencia, calidad, colorCamaron, camaronMar from ordenTrabajo where id= '"+ordenTrabajoId+"' ;" )

            return response.status(200).send({ordenTrabajo:ordenTrabajo[0]})

        } catch (error) {

            return error
            
        }
    }

    //Actualizar
    async actualizarOrdenTrabajo({request, params, response}){
        try {
            
            const {ordenTrabajoId} = request.params;            
            let ordenCompra = request.input('ordencompra');
            let fechaRegistro = moment().format('YYYY-MM-DD');
            let horaRecepcion = moment().format('HH:mm:ss');
            let proveedor = request.input('proveedor');
            let procedencia = request.input('procedencia').toUpperCase();
            let piscina = request.input('piscina');
            let producto = request.input('producto').toUpperCase();
            let camaronMar = request.input('camaronMar');
            let observacion = request.input('observacion');
            let tipoproductoC = request.input('tipoproductoC');
            let tipoproductoD = request.input('tipoproductoD');
            
            const ordenTrabajo = await Database.raw("update ordenTrabajo set ordenCompra='"+ordenCompra+"', fechaRegistro= '"+fechaRegistro+"', horaRecepcion= '"+horaRecepcion+"', proveedor= '"+proveedor+"', procedencia= '"+procedencia+"', piscina='"+piscina+"', producto= '"+producto+"', tipoproductoC='"+tipoproductoC+"',tipoproductoD='"+tipoproductoD+"', camaronMar='"+camaronMar+"', observacion= '"+observacion+"' where id='"+ordenTrabajoId+"' ")
            return response.status(200).send({message: 'Se ha actualizado la orden de trabajo correctamente', ordenTrabajo:ordenTrabajo[0]})

        } catch (error) {
            
            console.log("Orden de trabajo no actualizada", error)
           
        }
    }


    //Actualizar Aprobacion
    async actualizarOrdenTrabajoAprobacion({request, params, response}){
        try {
            
            const {ordenTrabajoId} = request.params;            
            let estadoCalidad = request.input('estadoCalidad');
            let lote = request.input('lote');
            let colorCamaron = request.input('colorCamaron');
            let calidad = request.input('calidad');
            
            const ordenTrabajo = await Database.raw("update ordenTrabajo set lote='"+lote+"', colorCamaron= '"+colorCamaron+"', calidad= '"+calidad+"', estadoCalidad='"+estadoCalidad+"' where id='"+ordenTrabajoId+"'")
            
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
            const ordenTrabajo = await Database.raw("update ordenTrabajo set estado='"+estado+"' where id='"+ordenTrabajoId+"'  ")
            
            return response.status(200).send({message: 'Se ha eliminado la orden de trabajo correctamente'})

        } catch (error) {

            console.log("Orden de trabajo no eliminada", error)

        }
    }
}

module.exports = OrdenTrabajoController