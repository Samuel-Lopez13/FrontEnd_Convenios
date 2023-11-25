import {_httpGet, _http, _httpToken} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import router from "@/router";
import {CREDENCIALES} from "@/utils/constantes/Constantes";

export const DatosPersonales = {

    loginUser: async (email, contrasena) => {
        try {
            const response = await _http.post('/api/Usuario/Login', {
                email: email,
                contrasena: contrasena,
            });

            if (response.data.token != null) {
                NotificacionExito.ExitosoWMensaje('Bienvenido')
                setTimeout(function () {
                    localStorage.setItem(CREDENCIALES, response.data.token)
                    router.push("/Inicio");
                }, 1500);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                NotificacionError.ErrorWMensaje('Ops!', 'Escribe tus credenciales');
            } else {
                NotificacionError.ErrorWMensaje('Ops!', 'Ocurrió un error con tus credenciales');
            }
        }
    },

}