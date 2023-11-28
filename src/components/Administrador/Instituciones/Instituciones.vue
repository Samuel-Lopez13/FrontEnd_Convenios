<script setup>
/****************************************             IMPORT             ***********************************************/

import TuplasInstituciones from "@/components/Administrador/Instituciones/TuplasInstituciones.vue";
import AgregarInstitucion from "@/components/Administrador/Instituciones/AgregarInstitucion.vue";
import {DatosInstituciones} from "@/api/provides/institucion.services";
import store from '@/store';
import {onMounted, ref, watch} from "vue";

/**************************************             VARIABLES             **********************************************/

const agregar = ref(false)
const pagina = ref(1)

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    paginacion();
})

/****************************************             WATCH              ***********************************************/

//Escogemos una nueva pagina y actualizamos los datos
watch(() => pagina, () => {
    paginacion();
})

//Siempre se actualiza a la ultima pagina creada
watch(() => store.state.Paginacion, () => {
    paginaNueva(store.state.Paginacion)
})

/****************************************             METODOS             **********************************************/

//Visualizara o no la ventana de agregar nueva institucion
const cambiarAgregar = () => {
    agregar.value = !agregar.value
}

//Evita que se cierre la ventana de agregar nueva institucion
const noCerrarAgregar = (event) => {
    event.stopPropagation()
}

//Obtiene el numero de paginas la primera vez
const paginacion = async () => {
    var tamano = await DatosInstituciones.getPaginas()
    store.state.Paginacion = tamano.paginas
}

//Cambia la pagina actual
const paginaNueva = (paginas) => {
    pagina.value = paginas
}

//Reduce una pagina son para los botones Next y Previous
const menosPagina = () => {
    if (pagina.value > 1) {
        pagina.value--
    }
}

//aumenta una pagina son para los botones Next y Previous
const masPagina = () => {
    if (pagina.value < store.state.Paginacion) {
        pagina.value++
    }
}

</script>

<template>
    <div class="container">
        <div class="titulo w-100 d-flex justify-content-center align-items-center h1"
             style="height: 100px; color: #1B365D">
            INSTITUCIONES
        </div>
        <div class="tabla w-100 d-flex justify-content-center">
            <div style="width: 1400px;">
                <div class="buscar d-flex gap-2 mb-2">
                    <input type="text" class="form-control" placeholder="Buscar por nombre..." style="width: 400px;">
                    <button class="btn btn-primary" @click="cambiarAgregar">Agregar Institución</button>
                </div>
                <div class="ventanaAgregar" v-if="agregar" @click="cambiarAgregar">
                    <AgregarInstitucion :visible.sync="agregar" @click="noCerrarAgregar"/>
                </div>
                <table class="table">
                    <thead class="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Identificación</th>
                        <th scope="col">Dirección</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <TuplasInstituciones
                        :pagina = pagina
                    />
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-end">
                        <li class="page-item"><a class="page-link" href="#" @click="menosPagina()">Previous</a></li>
                        <li class="page-item" v-for="(paginas, index) in store.state.Paginacion">
                            <a class="page-link" href="#" @click="paginaNueva(paginas)">{{ paginas }}</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#" @click="masPagina()">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ventanaAgregar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Opacidad aumentada */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Z-index aumentado */
}
</style>