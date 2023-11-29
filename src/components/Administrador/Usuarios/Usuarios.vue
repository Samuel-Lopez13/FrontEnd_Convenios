<script setup>
/****************************************             IMPORT             ***********************************************/

import TuplasUsuarios from "@/components/Administrador/Usuarios/TuplasUsuarios.vue";
import AgregarUsuario from "@/components/Administrador/Usuarios/AgregarUsuario.vue";
import {DatosPersonales} from "@/api/provides/usuario.services";
import {onMounted, ref, watch} from "vue";
import store from '@/store';

/**************************************             VARIABLES             **********************************************/

const buscar = ref("")
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
watch(() => store.state.PaginacionU, () => {
    paginaNueva(store.state.PaginacionU)
})

/****************************************             METODOS             **********************************************/

//Visualizara o no la ventana de agregar nuevo usuario
const cambiarAgregar = () => {
  agregar.value = !agregar.value
}

//Evita que se cierre la ventana de agregar nuevo usuario
const noCerrarAgregar = (event) => {
  event.stopPropagation()
}

//Obtiene el numero de paginas la primera vez
const paginacion = async () => {
    var tamano = await DatosPersonales.getPaginas()
    store.state.PaginacionU = tamano.paginas
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
    if (pagina.value < store.state.PaginacionU) {
        pagina.value++
    }
}

//solo actualiza la variable de busqueda y el numero de paginas
const busqueda = async () => {
    store.state.BusquedaUsuarios = buscar.value
    //Buscara el numero de pagina
    var tamano = await DatosPersonales.getPaginasBusqueda(buscar.value)
    store.state.PaginacionU = tamano.paginas
}

</script>

<template>
  <div class="container">
    <div class="titulo w-100 d-flex justify-content-center align-items-center h1"
         style="height: 100px; color: #1B365D">
      USUARIOS
    </div>
    <div class="tabla w-100 d-flex justify-content-center">
      <div style="width: 1400px;">
        <div class="buscar d-flex gap-2 mb-2">
          <input type="text" class="form-control" placeholder="Buscar por nombre..." style="width: 400px;" v-model="buscar" @input="busqueda">
          <button class="btn btn-primary" @click="cambiarAgregar">Agregar Usuario</button>
        </div>
        <div class="ventanaAgregar" v-if="agregar" @click="cambiarAgregar">
          <AgregarUsuario :visible.sync="agregar" @click="noCerrarAgregar" @cerrar-ventana="cambiarAgregar"/>
        </div>
        <table class="table">
          <thead class="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Institución</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <TuplasUsuarios
              :pagina = pagina
          />
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination d-flex justify-content-end">
            <li class="page-item"><a class="page-link" href="#" @click="menosPagina()">Previous</a></li>
            <li class="page-item" v-for="(paginas, index) in store.state.PaginacionU">
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