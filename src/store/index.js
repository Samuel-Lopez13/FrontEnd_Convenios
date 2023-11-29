import { createStore } from 'vuex'

export default new createStore({
    state: {
        CrearInstitucion: false,
        Paginacion: 1,
        BusquedaInstituciones: '',

        Token: '',
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
