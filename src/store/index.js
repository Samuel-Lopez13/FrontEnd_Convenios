import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default new createStore({
    state: {
        //Instituciones
        CrearInstitucion: false,
        Paginacion: 1,
        BusquedaInstituciones: '',

        //Usuarios
        CrearUsuario: false,
        PaginacionU: 1,
        BusquedaUsuarios: '',

        //Contratos
        CrearContrato: false,
        PaginacionC: 1,
        BusquedaContratos: '',

        //Sidebar
        vistaAdmin: false,
        vistaUser: false,
    },
    mutations: {
        setVistaAdmin(state, value) {
            state.vistaAdmin = value;
        },
        setVistaUser(state, value) {
            state.vistaUser = value;
        },
    },
    plugins: [
        createPersistedState({
            paths: ["vistaAdmin", "vistaUser"]
        }),
    ],
    actions: {
        // Define tus acciones aquí
    },
    getters: {
        // Define tus getters aquí
    }
})
