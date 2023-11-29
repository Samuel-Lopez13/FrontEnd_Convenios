import {_httpGet, _http, _httpToken} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import router from "@/router";
import {CREDENCIALES} from "@/utils/constantes/Constantes";
import store from "@/store";

export const DatosPersonales = {
    loginUser: async (email, contrasena) => {
        try {
            const response = await _http.post('/Usuario/Login', {
                email: email,
                contrasena: contrasena,
            });
            if (response.data.token != null) {
                localStorage.setItem(CREDENCIALES, response.data.token)
                NotificacionExito.ExitosoWMensaje('Bienvenido')
                setTimeout(function () {
                    if (response.data.rol === "Administrador"){
                        store.commit("setVistaAdmin", true);
                        store.commit("setVistaUser", false);
                        router.push("/Terminos");
                    }else{
                        store.commit("setVistaUser", true);
                        store.commit("setVistaAdmin", false);
                        router.push("/Terminos")
                    }
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

    /* Nuevo y en desarrollo */

    getUsuarios: async (pagina) => {
        try {
            const response = await _httpToken.get('/Usuario/Usuarios/' + pagina);

            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getPaginas: async () => {
        try {
            const response = await _httpToken.get('/Usuario/Paginas');
            return response.data;
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    postUsuario: async (Usuario, correo, id_institucion) => {
        try {
            const UsuarioJSON = {
                nombre: Usuario,
                correo: correo,
                institucion_Id: id_institucion
            };

            const response = await _httpToken.post('/Usuario/Usuarios', JSON.stringify(UsuarioJSON));
            NotificacionExito.ExitosoWMensaje('Usuario registrado con exito')
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    deleteUsuario: async (id) => {
        try {
            const response = await _httpToken.delete('/Usuario/Usuario/' + id);
            NotificacionExito.ExitosoWMensaje('usuario eliminado con exito')
        } catch (error) {
            NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
        }
    },

    getBusquedaUsuario: async (pagina, busqueda) => {
        try {
            const response = await _httpToken.get('/Usuario/Buscar?pagina=' + pagina + '&nombre=' + busqueda);
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
            console.log(error);
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await _httpToken.get('/Usuario/Paginas/' + busqueda);
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', 'Ocurrio algun error');
            console.log(error);
        }
    },

    userRol: async () =>{
        const response2 = await _httpToken.get('/Usuario/Rol')
        return response2.data.rol;
    }
}