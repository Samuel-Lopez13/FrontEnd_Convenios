import {autorization} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import axios from "axios";
import {BASEURL} from "@/utils/constantes/Constantes";

export const DatosContratos = {

    getContratos: async (pagina) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Contratos/' + pagina, autorization());

            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getPaginas: async () => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Paginas', autorization());
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', error);
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
            const response = await axios.delete(BASEURL + '/Contratos/Contrato/' + id, autorization());
            NotificacionExito.ExitosoWMensaje('Institucion eliminada con exito')
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getBusquedaContratos: async (pagina, busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Buscar?pagina=' + pagina + '&nombre=' + busqueda, autorization());
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Contratos/Paginas/' + busqueda, autorization());
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

}