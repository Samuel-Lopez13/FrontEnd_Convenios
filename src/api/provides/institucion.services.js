import {_httpGet, _http, _httpToken} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import {CREDENCIALES} from "@/utils/constantes/Constantes";
import router from "@/router";

export const DatosInstituciones = {

    getInstituciones: async (pagina) => {
        try {
            const response = await _httpToken.get('/Institucion/Instituciones/' + pagina);

            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getPaginas: async () => {
        try {
            const response = await _httpToken.get('/Institucion/Paginas');
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

}

export const DatosContratos = {

    getContratos: async (pagina) => {
        try {
            const response = await _httpToken.get('' + pagina);
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getPaginasContrato: async () => {
        try {
            const response = await _httpToken.get('');
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

}

export const DatosUsuarios = {

    getUsuarios: async (pagina) => {
        try {
            const response = await _httpToken.get('' + pagina);
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getPaginasUsuarios: async () => {
        try {
            const response = await _httpToken.get('');
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

}