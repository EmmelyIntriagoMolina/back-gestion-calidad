'use strict'
const Database = use('Database')
const moment = require('moment')

class LoteController { 

    //Ingresar lote
    async ingresarLote({request, params, response}){
        try {
            let nlote = request.input('nlote');
            let estadoCalidad = request.input('estadoCalidad');
            let colorCamaron = request.input('colorCamaron');
            let calidad = request.imput('calidad');
            let estado = 1;
            
            const lote = await Database.raw("insert into (nlote, estadoCalidad, colorCamaron, calidad, estado) values ('"+nlote+"', '"+estadoCalidad+"', '"+colorCamaron+"', '"+calidad+"', '"+estado+"')") 
            return response.status(200).send({message:'Se ha registrado el lote correctamente', lote:lote[0]})
        }
        catch(error) {
            console.log("No se ha registrado correctamente")
        }
    }


    //Consultar loteID
    async consultarLoteID({request, params, response}){
        try {

            const {loteId} = request.params;
            const lote = await Database.raw("select nlote, estadoCalidad, colorCamaron, calidad from lote where nlote='"+loteId+"' ");
            return response.status(200).send({lote:lote[0]}) 

        } catch (error) {
            console.log("Lote no encontrado", error)
        }
    }

    //consulta general lotes
    async consultarLotes({request, params, response}){
        try {

            const lote = await Database.raw("select nlote, estadoCalidad, colorCamaron, calidad from lote where estado=1 order by 1 desc ")
            return response.status(200).send({lote:lote[0]})

        } catch (error) {
            
            console.log("No se ha  podido consultar los registros ", error)
        }
    }

    //eliminar lote
    async eliminarLote({request, params, response}){
        try {

            let estado = 0;
            const {loteId} = request.params; 
            const lote = await Database.raw("update lote set estado='"+estado+"' where id='"+loteId+"'")
            
            return response.status(200).send({message: 'Se ha eliminado el lote correctamente'})

            
        } catch (error) {
            
            console.log("No se ha  podido eliminar el lote ", error)
        }
    }
}

module.exports = LoteController;