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

    postInstitucion: async (institucion) => {
        try {
            const institucionJSON = {
                nombre: institucion
            };

            const response = await _httpToken.post('/Institucion/Institucion', JSON.stringify(institucionJSON));
            NotificacionExito.ExitosoWMensaje('Institucion registrada con exito')
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    deleteInstitucion: async (id) => {
        try {
            const response = await _httpToken.delete('/Institucion/Institucion/' + id);
            NotificacionExito.ExitosoWMensaje('Institucion eliminada con exito')
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getBusquedaInstituciones: async (pagina, busqueda) => {
        try {
            const response = await _httpToken.get('/Institucion/Buscar?pagina=' + pagina + '&nombre=' + busqueda);
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
            console.log(error);
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await _httpToken.get('http://localhost:5193/Institucion/Paginas/' + busqueda);
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
            console.log(error);
        }
    }

}