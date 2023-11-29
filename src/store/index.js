import { createStore } from 'vuex'

export default new createStore({
    state: {
        //Instituciones
        CrearInstitucion: false,
        Paginacion: 1,
        BusquedaInstituciones: '',

        //Usuarios
        PaginacionU: 1,
        BusquedaUsuarios: '',
    },
    mutations: {
        // Define tus mutaciones aquí
    },
    actions: {
        // Define tus acciones aquí
    },
    getters: {
        // Define tus getters aquí
    }
})
