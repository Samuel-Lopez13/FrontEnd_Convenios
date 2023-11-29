import {_httpGet, _http, _httpToken, _httpTokenFile} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";

export const DatosContratos = {

    getContratos: async (pagina) => {
        try {
            const response = await _httpToken.get('/Contratos/Contratos/' + pagina);

            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getPaginas: async () => {
        try {
            const response = await _httpToken.get('/Contratos/Paginas');
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
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
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    deleteContratos: async (id) => {
        try {
            const response = await _httpToken.delete('/Contratos/Contrato/' + id);
            NotificacionExito.ExitosoWMensaje('Institucion eliminada con exito')
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getBusquedaContratos: async (pagina, busqueda) => {
        try {
            const response = await _httpToken.get('/Contratos/Buscar?pagina=' + pagina + '&nombre=' + busqueda);
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await _httpToken.get('/Contratos/Paginas/' + busqueda);
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

}