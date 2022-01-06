'use strict'
const Database = use('Database')
const moment = require('moment')

class AnalisisProductoController {

    //Guardar
    async guardarAnalisisProducto({request,params,response}){
        try {

            let producto = request.input('producto');
            let totalCamarones = request.input('totalCamarones');
            let observacion = request.input('observacion');
            let color = request.input('color');
            let olor = request.input('olor');
            let sabor = request.input('sabor');
            let temp1 = request.input('temp1');
            let temp2 = request.input('temp2');
            let temp3 = request.input('temp3');
            let temp4 = request.input('temp4');
            let temp5 = request.input('temp5');
            let temp6 = request.input('temp6');
            let temp7 = request.input('temp7');
            let temp8 = request.input('temp8');
            let temp9 = request.input('temp9');
            let temp10 = request.input('temp10');
            let pesoMuestra = request.input('pesoMuestra'); 
            let numeroCamaronesAO = request.input('numeroCamaronesAO');
            let grsPromedio = request.input('grsPromedio');
            let otros100ppm = request.input('otros100ppm');
            let otros10ppm = request.input('otros10ppm') ;
            let deshidratadoUni = request.input('deshidratadoUni');
            let deshidratadosPorc = request.input('deshidratadosPorc');
            let blandosUni = request.input('blandosUni');
            let blandosPorc = request.input('blandosPorc');
            let mudadosUni = request.input('mudadosUni');
            let mudadosPorc = request.input('mudadosPorc');
            let cabezaBajaUni = request.input('cabezaBajaUni');
            let cabezaBajaPorc = request.input('cabezaBajaPorc');
            let cabezaNegraUni = request.input('cabezaNegraUni');
            let cabezaNegraPorc = request.input('cabezaNegraPorc');
            let cabezaRojaUni = request.input('cabezaRojaUni');
            let cabezaRojaPorc = request.input('cabezaRojaPorc');
            let hepReventadoUni = request.input('hepReventadoUni');
            let hepReventadoPorc = request.input('hepReventadoPorc');
            let membranaRotaUni = request.input('membranaRotaUni');
            let membranaRotaPorc = request.input('membranaRotaPorc');
            let primerSegmentoUni = request.input('primerSegmentoUni');
            let primerSegmentoPorc = request.input('primerSegmentoPorc');
            let necrosisLeveUni =  request.input('necrosisLeveUni');
            let necrosisLevePorc =  request.input('necrosisLevePorc');
            let necrosisFuerteUni =  request.input('necrosisFuerteUni');
            let necrosisFuertePorc =  request.input('necrosisFuertePorc');
            let melanosisUni = request.input('melanosisUni');
            let melanosisPorc = request.input('melanosisPorc');
            let quebradosUni = request.input('quebradosUni');
            let quebradosPorc = request.input('quebradosPorc');
            let deformesUni = request.input('deformesUni');
            let deformesPorc = request.input('deformesPorc');
            let corbataUni = request.input('corbataUni');
            let corbataPorc = request.input('corbataPorc');
            let pataUni = request.input('pataUni');
            let pataPorc = request.input('pataPorc');
            let cascarasUni = request.input('cascarasUni');
            let cascarasPorc = request.input('cascarasPorc');
            let antenasUni = request.input('antenasUni');
            let antenasPorc = request.input('antenasPorc');
            let deterioroRUni = request.input('deterioroRUni');
            let deterioroRPorc = request.input('deterioroRPorc');
            let totalAnalisisDef = request.input('totalAnalisisDef');

            let ncamarones215 = request.input('ncamarones215') ;
            let ncamarones205 = request.input('ncamarones205') ;
            let ncamarones202 = request.input('ncamarones202') ;
            let ncamarones195 = request.input('ncamarones195') ;
            let ncamarones189 = request.input('ncamarones189') ;
            let ncamarones182 = request.input('ncamarones182') ;
            let ncamarones176 = request.input('ncamarones176') ;
            let ncamarones169 = request.input('ncamarones169') ;
            let ncamarones163 = request.input('ncamarones163') ;
            let ncamarones155 = request.input('ncamarones155') ;
            let ncamarones15 = request.input('ncamarones15') ;
            let ncamarones143 = request.input('ncamarones143') 
            let ncamarones137 = request.input('ncamarones137'); 
            let ncamarones13 = request.input('ncamarones13') ;
            let ncamarones124 = request.input('ncamarones124'); 
            let ncamarones117 = request.input('ncamarones117'); 
            let ncamarones111 = request.input('ncamarones111'); 
            let ncamarones104 = request.input('ncamarones104'); 
            let ncamarones96 = request.input('ncamarones96') ;;
            let ncamarones91 = request.input('ncamarones91') ;
            let ncamarones85 = request.input('ncamarones85') ;
            let ncamarones78 = request.input('ncamarones78') ;
            let ncamarones72 = request.input('ncamarones72') ;
            let ncamarones65 = request.input('ncamarones65') ;
            let ncamarones59 = request.input('ncamarones59') ;
            let ncamarones52 = request.input('ncamarones52') ;
            let ncamarones46 = request.input('ncamarones46') ;
            let ncamarones33 = request.input('ncamarones33') ;
            let ncamarones26 = request.input('ncamarones26') ;
            let ncamarones2 = request.input('ncamarones2');
            let ncamarones133 = request.input('ncamarones133');
            let ncamarones07 = request.input('ncamarones07') ;
            let ncamarones39 = request.input('ncamarones39');
            let pesoT215 = request.input('pesoT215') ;
            let pesoT205 = request.input('pesoT205') ;
            let pesoT202 = request.input('pesoT202') ;
            let pesoT195 = request.input('pesoT195') ;
            let pesoT189 = request.input('pesoT189');
            let pesoT182 = request.input('pesoT182') ;
            let pesoT176 = request.input('pesoT176') ;
            let pesoT169 = request.input('pesoT169') ;
            let pesoT163 = request.input('pesoT163') ;
            let pesoT155 = request.input('pesoT155'); 
            let pesoT15 = request.input('pesoT15') ;
            let pesoT143 = request.input('pesoT143'); 
            let pesoT137 = request.input('pesoT137') ;
            let pesoT13 = request.input('pesoT13') ;
            let pesoT124 = request.input('pesoT124') ;
            let pesoT117 = request.input('pesoT117') ;
            let pesoT111 = request.input('pesoT111') ;
            let pesoT104 = request.input('pesoT104');
            let pesoT96 = request.input('pesoT96') ;
            let pesoT91 = request.input('pesoT91') ;
            let pesoT85 = request.input('pesoT85') ;
            let pesoT78 = request.input('pesoT78') ;
            let pesoT72 = request.input('pesoT72') ;
            let pesoT65 = request.input('pesoT65') ;
            let pesoT59 = request.input('pesoT59') ;
            let pesoT52 = request.input('pesoT52') ;
            let pesoT46 = request.input('pesoT46') ;
            let pesoT33 = request.input('pesoT33') ;
            let pesoT26 = request.input('pesoT26') ;
            let pesoT2 = request.input('pesoT2') ;
            let pesoT133 = request.input('pesoT133') ;
            let pesoT07 = request.input('pesoT07') ;
            let pesoT39 = request.input('pesoT39') ;
          
            const analisisCalidad = await Database.raw("insert into analisisproducto (producto, totalCamarones, observacion, color, olor, sabor, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, pesoMuestra, numeroCamaronesAO, grsPromedio, otros100ppm, otros10ppm, deshidratadoUni, deshidratadosPorc, blandosUni, blandosPorc, mudadosUni, mudadosPorc, cabezaBajaUni, cabezaBajaPorc, cabezaNegraUni, cabezaNegraPorc, cabezaRojaUni, cabezaRojaPorc, hepReventadoUni, hepReventadoPorc,  membranaRotaUni, membranaRotaPorc, primerSegmentoUni, primerSegmentoPorc, necrosisLeveUni, necrosisLevePorc, necrosisFuerteUni, necrosisFuertePorc, melanosisUni, melanosisPorc, quebradosUni, quebradosPorc, deformesUni, deformesPorc, corbataUni, corbataPorc, pataUni, pataPorc, cascarasUni, cascarasPorc, antenasUni, antenasPorc, deterioroRUni, deterioroRPorc, totalAnalisisDef, ncamarones215, ncamarones205, ncamarones202, ncamarones195, ncamarones189, ncamarones182, ncamarones176, ncamarones169, ncamarones163, ncamarones155, ncamarones15, ncamarones143, ncamarones137, ncamarones13, ncamarones124, ncamarones117, ncamarones111, ncamarones104, ncamarones96, ncamarones91, ncamarones85, ncamarones78, ncamarones72, ncamarones65, ncamarones59, ncamarones52, ncamarones46, ncamarones33, ncamarones26, ncamarones2, ncamarones133, ncamarones07, ncamarones39, pesoT215, pesoT205, pesoT202, pesoT195, pesoT189, pesoT182, pesoT176, pesoT169, pesoT163, pesoT155, pesoT15, pesoT143, pesoT137, pesoT13, pesoT124, pesoT117, pesoT111, pesoT104, pesoT96, pesoT91, pesoT85, pesoT78, pesoT72, pesoT65, pesoT59, pesoT52, pesoT46, pesoT33, pesoT26, pesoT2, pesoT133, pesoT07, pesoT39) values ('"+producto+"', '"+totalCamarones+"', '"+observacion+"', '"+color+"', '"+olor+"', '"+sabor+"', '"+temp1+"', '"+temp2+"', '"+temp3+"', '"+temp4+"', '"+temp5+"', '"+temp6+"', '"+temp7+"', '"+temp8+"', '"+temp9+"', '"+temp10+"', '"+pesoMuestra+"', '"+numeroCamaronesAO+"', '"+grsPromedio+"', '"+otros100ppm+"', '"+otros10ppm+"', '"+deshidratadoUni+"', '"+deshidratadosPorc+"', '"+blandosUni+"', '"+blandosPorc+"', '"+mudadosUni+"', '"+mudadosPorc+"', '"+cabezaBajaUni+"', '"+cabezaBajaPorc+"', '"+cabezaNegraUni+"', '"+cabezaNegraPorc+"', '"+cabezaRojaUni+"', '"+cabezaRojaPorc+"', '"+hepReventadoUni+"', '"+hepReventadoPorc+"', '"+membranaRotaUni+"', '"+membranaRotaPorc+"', '"+primerSegmentoUni+"', '"+primerSegmentoPorc+"', '"+necrosisLeveUni+"', '"+necrosisLevePorc+"', '"+necrosisFuerteUni+"', '"+necrosisFuertePorc+"', '"+melanosisUni+"', '"+melanosisPorc+"', '"+quebradosUni+"', '"+quebradosPorc+"', '"+deformesUni+"', '"+deformesPorc+"', '"+corbataUni+"', '"+corbataPorc+"', '"+pataUni+"', '"+pataPorc+"', '"+cascarasUni+"', '"+cascarasPorc+"', '"+antenasUni+"', '"+antenasPorc+"', '"+deterioroRUni+"', '"+deterioroRPorc+"', '"+totalAnalisisDef+"', '"+ncamarones215+"', '"+ncamarones205+"', '"+ncamarones202+"', '"+ncamarones195+"', '"+ncamarones189+"', '"+ncamarones182+"', '"+ncamarones176+"', '"+ncamarones169+"', '"+ncamarones163+"', '"+ncamarones155+"', '"+ncamarones15+"', '"+ncamarones143+"', '"+ncamarones137+"', '"+ncamarones13+"', '"+ncamarones124+"', '"+ncamarones117+"', '"+ncamarones111+"', '"+ncamarones104+"', '"+ncamarones96+"', '"+ncamarones91+"','"+ncamarones85+"', '"+ncamarones78+"', '"+ncamarones72+"', '"+ncamarones65+"', '"+ncamarones59+"', '"+ncamarones52+"', '"+ncamarones46+"', '"+ncamarones33+"', '"+ncamarones26+"', '"+ncamarones2+"', '"+ncamarones133+"','"+ncamarones07+"', '"+ncamarones39+"', '"+pesoT215+"', '"+pesoT205+"', '"+pesoT202+"', '"+pesoT195+"', '"+pesoT189+"', '"+pesoT182+"', '"+pesoT176+"', '"+pesoT169+"', '"+pesoT163+"', '"+pesoT155+"', '"+pesoT15+"', '"+pesoT143+"', '"+pesoT137+"', '"+pesoT13+"', '"+pesoT124+"', '"+pesoT117+"', '"+pesoT111+"', '"+pesoT104+"', '"+pesoT96+"', '"+pesoT91+"', '"+pesoT85+"', '"+pesoT78+"', '"+pesoT72+"', '"+pesoT65+"', '"+pesoT59+"', '"+pesoT52+"', '"+pesoT46+"', '"+pesoT33+"', '"+pesoT26+"', '"+pesoT2+"', '"+pesoT133+"', '"+pesoT07+"', '"+pesoT39+"')")
            return response.status(200).send({message: 'Se ha registrado el analisis del producto correctamente', analisisCalidad:analisisCalidad[0]})
   
        } catch (error) {

            console.log("No añadido ", error)
            
        }
    }


    //Consultar
    async consultarAnalisisProductoId({request, params, response}){

        try {

            const{analisisProductoId} = request.params;
            const analisisCalidad = await Database.raw("select producto, totalCamarones, observacion, color, olor, sabor, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, pesoMuestra, numeroCamaronesAO, grsPromedio, otros100ppm, otros10ppm, deshidratadoUni, deshidratadoPorc, blandosUni, blandosPorc, mudadosUni, mudadosPorc, cabezaBajaUni, cabezaBajaPorc, cabezaNegraUni, cabezaNegraPorc, cabezaRojaUni, cabezaRojaPorc, hepReventadoUni, hepReventadoPorc,  membranaRotaUni, membranaRotaPorc, primerSegmentoUni, primerSegmentoPorc, necrosisLeveUni, necrosisLevePorc, necrosisFuerteUni, necrosisFuertePorc, melanosisUni, melanosisPorc, quebradosUni, quebradosPorc, deformesUni, deformesPorc, corbataUni, corbataPorc, pataUni, pataPorc, cascarasUni, cascarasPorc, antenasUni, antenasPorc, deterioroRUni, deterioroPorc, totalAnalisisDef, ncamarones215, ncamarones205, ncamarones202, ncamarones195, ncamarones189, ncamarones182, ncamarones176, ncamarones169, ncamarones163, ncamarones155, ncamarones15, ncamarones143, ncamarones137, ncamarones13, ncamarones124, ncamarones117, ncamarones111, ncamarones104, ncamarones96, ncamarones91, ncamarones85, ncamarones78, ncamarones72, ncamarones65, ncamarones59, ncamarones52, ncamarones46, ncamarones33, ncamarones26, ncamarones2, ncamarones133, ncamarones07, ncamarones39, pesoT215, pesoT205, pesoT202, pesoT195, pesoT189, pesoT182, pesoT176, pesoT169, pesoT163, pesoT155, pesoT15, pesoT143, pesoT137, pesoT13, pesoT124, pesoT117, pesoT111, pesoT104, pesoT96, pesoT91, pesoT85, pesoT78, pesoT72, pesoT65, pesoT59, pesoT52, pesoT46, pesoT33, pesoT26, pesoT2, pesoT133, pesoT07, pesoT39 where id = '"+analisisProductoId+"' ")
            return response.status(200).send({analisisCalidad:analisisCalidad[0]})

        } catch (error) {

            return error

        }
    }
}

module.exports = AnalisisProductoController