import {autorization, autorizationJSON} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import {BASEURL} from "@/utils/constantes/Constantes";
import axios from "axios";

export const DatosInstituciones = {

    getInstituciones: async (pagina) => {
        try {
            const response = await axios.get(BASEURL + '/Institucion/Instituciones/' + pagina, autorization());

            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getPaginas: async () => {
        try {
            const response = await axios.get(BASEURL + '/Institucion/Paginas', autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    postInstitucion: async (institucion) => {
        try {
            const institucionJSON = {
                nombre: institucion
            };

            const [data, config] = autorizationJSON(institucionJSON);

            const response = await axios.post(BASEURL + '/Institucion/Institucion', data, config);
            NotificacionExito.ExitosoWMensaje('Institucion registrada con exito')
        } catch (error) {
           // NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    deleteInstitucion: async (id) => {
        try {
            const response = await axios.delete(BASEURL + '/Institucion/Institucion/' + id, autorization());
            NotificacionExito.ExitosoWMensaje('Institucion eliminada con exito')
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getBusquedaInstituciones: async (pagina, busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Institucion/Buscar?pagina=' + pagina + '&nombre=' + busqueda, autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Institucion/Paginas/' + busqueda, autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getAllInstituciones: async () => {
        try {
            const response = await axios.get(BASEURL + '/Institucion/AllInstitution',  autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getSearchInstituciones: async (busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Institucion/AllInstitution/' + busqueda, autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    }

}