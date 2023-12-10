<script setup>
/****************************************             IMPORT             ***********************************************/

import {onMounted, ref, watch} from "vue";
import TuplasContratos from "@/components/Administrador/Contratos/TuplasContratos.vue";
import AgregarContrato from "@/components/Administrador/Contratos/AgregarContrato.vue";
import {DatosContratos} from "@/api/provides/contratos.services";
import {DatosPersonales} from "@/api/provides/usuario.services";
import store from '@/store';
import {verificarRol} from "@/utils/constantes/Constantes";
import router from "@/router";

/**************************************             VARIABLES             **********************************************/

const buscar = ref("")
const agregar = ref(false)
const pagina = ref(1)

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    paginacion();
    verificarRol();
})

/****************************************             WATCH              ***********************************************/

//Escogemos una nueva pagina y actualizamos los datos
watch(() => pagina, () => {
    paginacion();
})

//Siempre se actualiza a la ultima pagina creada
watch(() => store.state.PaginacionC, () => {
    paginaNueva(store.state.PaginacionC)
})

/****************************************             METODOS             **********************************************/

//Visualizara o no la ventana de agregar nuevo contrato
const cambiarAgregar = () => {
    agregar.value = !agregar.value
}

//Evita que se cierre la ventana de agregar nuevo contrato
const noCerrarAgregar = (event) => {
    event.stopPropagation()
}

//Obtiene el numero de paginas la primera vez
const paginacion = async () => {
    var tamano = await DatosContratos.getPaginas()
    store.state.PaginacionC = tamano.paginas
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
    if (pagina.value < store.state.PaginacionC) {
        pagina.value++
    }
}

//solo actualiza la variable de busqueda y el numero de paginas
const busqueda = async () => {
    store.state.BusquedaContratos = buscar.value
    //Buscara el numero de pagina
    var tamano = await DatosContratos.getPaginasBusqueda(buscar.value)
    store.state.PaginacionC = tamano.paginas
}
</script>

<template>
    <div class="container">
        <div class="titulo w-100 d-flex justify-content-center align-items-center h1"
             style="height: 100px; color: #1B365D">
            CONTRATOS
        </div>
        <div class="tabla w-100 d-flex justify-content-center">
            <div style="width: 1400px;">
                <div class="buscar d-flex gap-2 mb-2">
                    <input type="text" class="form-control" placeholder="Buscar por nombre..." style="width: 400px;"
                           v-model="buscar" @input="busqueda">
                    <button class="btn btn-primary" @click="cambiarAgregar">Crear nuevo contrato</button>
                </div>
                <div class="ventanaAgregar" v-if="agregar" @click="cambiarAgregar">
                    <AgregarContrato :visible.sync="agregar" @click="noCerrarAgregar" @cerrar-ventana="cambiarAgregar"/>
                </div>
                <table class="table">
                    <thead class="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Objeto</th>
                        <th scope="col">Fecha Inicio</th>
                        <th scope="col">Fecha Termino</th>
                        <th scope="col">Archivo</th>
                        <th scope="col">Institucion</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <TuplasContratos
                        :pagina=pagina
                    />
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-end">
                        <li class="page-item"><a class="page-link" href="#" @click="menosPagina()">Previous</a></li>
                        <li class="page-item" v-for="(paginas, index) in store.state.PaginacionC">
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