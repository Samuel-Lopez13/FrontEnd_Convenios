import {NotificacionError} from "@/alertas/alerts";
import {autorization, autorizationJSON} from '@/api'
import axios from "axios";
import {BASEURL} from "@/utils/constantes/Constantes";
import { useRouter } from 'vue-router';

export const DatosChat = {
    postMensaje: async (mensaje, id) => {
        try {
            const chatJSON = {
                mensaje: mensaje,
                id_Contrato: id
            };

            const [data, config] = autorizationJSON(chatJSON);

            const response = await axios.post(BASEURL + '/Chat/Mensaje', data, config);

            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getMensajes: async (id) => {
        try {
            const response = await axios.get(BASEURL + '/Chat/Chats/' + id, autorization());

            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    }
};

