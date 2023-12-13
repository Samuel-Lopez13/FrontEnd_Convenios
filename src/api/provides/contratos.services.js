import {autorization, autorizationJSON, sinAutorizationJSON} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import axios from "axios";
import {BASEURL} from "@/utils/constantes/Constantes";
import config from "bootstrap/js/src/util/config";

export const DatosContratos = {

    getContratos: async (pagina) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Contratos/' + pagina, autorization());

            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getPaginas: async () => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Paginas', autorization());
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    postContratos: async (contratos) => {
        try {
            await fetch('http://localhost:5193/Institucion/Institucion', {
                method: 'POST',
                body: contratos,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("Credenciales")}`
                },
            })
            //const response = await _httpTokenFile.post('/Institucion/Institucion', contratos);
            NotificacionExito.ExitosoWMensaje('Contrato creado con exito')
        } catch (error) {
            console.log(error)
            console.log(error)
        }
    },

    deleteContratos: async (id) => {
        try {
            const response = await axios.delete(BASEURL + '/Contratos/Contrato/' + id, autorization());
            NotificacionExito.ExitosoWMensaje('Institucion eliminada con exito')
        } catch (error) {
            console.log(error)
        }
    },

    getBusquedaContratos: async (pagina, busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Buscar?pagina=' + pagina + '&nombre=' + busqueda, autorization());
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Paginas/' + busqueda, autorization());
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    contratoFile: async (id) =>{
        try {
            const response = await axios.get(BASEURL + '/Contratos/ContratosFile/' + id, autorization());
            return response.data.file
        } catch (error){
            console.log(error)
        }
    },

    contratoNombre: async (id) =>{
        try {
            const response = await axios.get(BASEURL + '/Contratos/ContratosFile/' + id, autorization());
            return response.data.nombre
        } catch (error){
            console.log(error)
        }
    },

    obtenerStatusRevision: async (id) =>{
        try {
            const response = await axios.get(BASEURL + '/Contratos/Revision/' + id, autorization());
            console.log(response.data.revision)
            return response.data.revision;
        } catch (error){
            console.log(error)
        }
    },

    Firma: async (id_Contrato) => {
        try {
            const firmaJSON = {
                id_Contrato: id_Contrato,
            };
            const [data, config] = autorizationJSON(firmaJSON);
            const response = await axios.put(BASEURL + '/Contratos/Firma', data, config);
            NotificacionExito.ExitosoWMensaje('Solicitaste la firma de la contraparte')
        } catch (error) {
            console.log(error)
        }
    },

    getStatusFirma:async (Contrato_Id) =>{
        try {
            const response = await axios.get(BASEURL + '/Contratos/Firma/' + Contrato_Id, autorization());
            console.log("firma es: " + response.data.firma)
            return response.data.firma;
        } catch (error){
            console.log(error)
        }
    },

    FirmaUsuario: async (contrato_Id,status) => {
        try {
            const firmaUsuarioJSON = {
                contrato_Id: contrato_Id,
                status: status,
            };
            const [data, config] = autorizationJSON(firmaUsuarioJSON);
            const response = await axios.put(BASEURL + '/Contratos/FirmaUsuario', data, config);
        } catch (error) {
            console.log(error)
        }
    },

    getContratoFull: async (id) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/ContratoFull/' + id, autorization());
            console.log(response.data.listo)
            return response.data.listo;
        } catch (error) {
            console.log(error)
        }
    },
    getContratoStatus: async (id) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Status/' + id, autorization());
            console.log(response.data.status)
            return response.data.status;
        } catch (error) {
            console.log(error)
        }
    },
}