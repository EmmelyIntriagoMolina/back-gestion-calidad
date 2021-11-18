'use strict'


const Database = use('Database')
const moment = require('moment')
 
class OrdenClienteController {
 
    //Ingresar
    async ingresarOrdenCliente ({request, params, response}){
        try {

            
            let destino = request.input('destino').toUpperCase();
            let referencia=  request.input('referencia').toUpperCase();
            let cliente = request.input('cliente');
            let producto = request.input('producto').toUpperCase();
            let observacion  = request.input('observacion').toUpperCase();
            let fecha = moment().format('YYYY-MM-DD HH:mm"');
            let estado = 1;

            /*const existe = await Database.raw("select destino, referencia, fecha, cliente, producto, observacion, estado from ordenCliente where destino='"+destino+"' and referencia='"+referencia+"' and cliente='"+cliente+"' and fecha='"+fecha+"' ")

            if(existe[0].length >=1){

                return response.status(200).send({message: 'La orden de cliente que intenta ingresar ya existe'})
            }
            else { */

                const ordenesCliente = await Database.raw("insert into ordenCliente (destino, referencia, fecha, cliente, producto, observacion, estado) values ('"+destino+"', '"+referencia+"', '"+fecha+"', '"+cliente+"', '"+producto+"', '"+observacion+"', '"+estado+"')")
                return response.status(200).send({message: 'Se ha registrado la orden de cliente correctamente', ordenesCliente:ordenesCliente[0]})
        
           // }

        }catch (error) {

            console.log("No añadido ", error)
        }
    }


    //Consultar
    async consultarOrdenCliente({request, params, response}){
        try {

            const ordenCliente = await Database.raw("select numero, fecha, referencia, cliente, destino from ordenCliente where estado = 1 order by 1 desc;")
            return response.status(200).send({ordenCliente:ordenCliente[0]})

        } catch (error) {

            return error
        }
    }


    //Consultar por Id
    async consultarOrdenClienteId({request, params, response}){
        try {
            
            const{ordenClienteId} = request.params;
            const ordenCliente = await Database.raw("select numero, destino, referencia, fecha, cliente, producto, observacion from ordenTrabajo where id= '"+ordenClienteId+"' " )

            return response.status(200).send({ordenCliente:ordenCliente[0]})

        } catch (error) {

            return error
            
        }
    }


    //Actualizar
    async actualizarOrdenCliente({request, params, response}){
        try {
            
            const {ordenClienteId} = request.params;
            let destino = request.input('destino').toUpperCase();
            let referencia=  request.input('referencia').toUpperCase();
            let cliente = request.input('cliente').toUpperCase();
            let producto = request.input('producto').toUpperCase();
            let fecha = moment().format('YYYY-MM-DD');
            let observacion  = request.input('observacion').toUpperCase();
            let estado = request.input('estado')

            const ordenesCliente= await Database.raw("update ordenCliente set destino='"+destino+"', referencia= '"+referencia+"', fecha= '"+fecha+"', cliente= '"+cliente+"', producto= '"+producto+"', observacion='"+observacion+"', estado='"+estado+"' where numero='"+ordenClienteId+"' ")

            return response.status(200).send({message: 'Se ha actualizado la orden de cliente correctamente', ordenesCliente:ordenesCliente[0]})

        } catch (error) {
            
            console.log("Orden de cliente no actualizada", error)
            
        }
    }

    //Eliminar
    async eliminarOrdenCliente({request, params, response}){
        try {
            
            let estado = 0;
            const {ordenClienteId} = request.params;
            const ordenCliente = await Database.raw("update ordenCliente set estado='"+estado+"' where numero='"+ordenClienteId+"'  ")
            
            return response.status(200).send({message: 'Se ha eliminado la orden de cliente correctamente'})

        } catch (error) {

            console.log("Orden de cliente no eliminada", error)

        }
    }
}

module.exports = OrdenClienteController