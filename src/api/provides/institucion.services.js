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