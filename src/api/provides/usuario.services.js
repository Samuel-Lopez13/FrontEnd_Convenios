import {autorization, sinAutorizationJSON, autorizationJSON} from '@/api'
import {NotificacionExito, NotificacionError} from "@/alertas/alerts";
import router from "@/router";
import {BASEURL, CREDENCIALES} from "@/utils/constantes/Constantes";
import store from "@/store";
import axios from "axios";

export const DatosPersonales = {
    loginUser: async (email, contrasena) => {
        try {
            const usuarioJSON = {
                email: email,
                contrasena: contrasena,
            };

            const [data, config] = sinAutorizationJSON(usuarioJSON);

            const response = await axios.post(BASEURL + '/Usuario/Login', data, config);

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
                NotificacionError.ErrorWMensaje('Ops!', 'Credenciales Incorrectas');
            } else {
                //NotificacionError.ErrorWMensaje('Ops!', 'Ocurrió un error con tus credenciales');
            }
        }
    },

    getUsuarios: async (pagina) => {
        try {
            const response = await axios.get(BASEURL + '/Usuario/Usuarios/' + pagina, autorization());

            return response.data;
        } catch (error) {
           // NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getPaginas: async () => {
        try {
            const response = await axios.get(BASEURL + '/Usuario/Paginas', autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    postUsuario: async (Usuario, correo, id_institucion) => {
        try {
            const usuarioJSON = {
                nombre: Usuario,
                correo: correo,
                institucion_Id: id_institucion
            };

            const [data, config] = autorizationJSON(usuarioJSON);

            const response = await axios.post(BASEURL + '/Usuario/Usuarios', data, config);
            NotificacionExito.ExitosoW("La contraseña del usuario es: " + response.data.contrasena)
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    deleteUsuario: async (id) => {
        try {
            const response = await axios.delete(BASEURL + '/Usuario/Usuario/' + id, autorization());
            NotificacionExito.ExitosoWMensaje('usuario eliminado con exito')
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getBusquedaUsuario: async (pagina, busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Usuario/Buscar?pagina=' + pagina + '&nombre=' + busqueda, autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    getPaginasBusqueda: async (busqueda) => {
        try {
            const response = await axios.get(BASEURL + '/Usuario/Paginas/' + busqueda, autorization());
            return response.data;
        } catch (error) {
            //NotificacionError.ErrorWMensaje('Ops!', error);
        }
    },

    userRol: async () =>{
        const response2 = await axios.get(BASEURL + '/Usuario/Rol', autorization());
        return response2.data;
    },

    getContratosUser : async () =>{
        try {
            const response = await axios.get(BASEURL + '/Contratos/ContratosUsuario', autorization())
            return response.data;
        }catch (error){
            //console.log('No hay contratos para este usuario')
        }
    },


}