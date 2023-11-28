<script setup>
/****************************************             IMPORT             ***********************************************/

import {DatosInstituciones} from "@/api/provides/institucion.services";
import {ref, onMounted, watch} from "vue";
import store from "@/store";

/****************************************             PROPS             ************************************************/

const props = defineProps(['pagina']);

/**************************************             VARIABLES             **********************************************/

const instituciones = ref([]);
const carga = ref(true);

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    obtenerInstituciones();
})

/****************************************             WATCH              ***********************************************/

//Si se cambia de pagina se actualiza la lista y se actualizara dependiendo si esta en busqueda o no
watch(() => props.pagina, () => {
    if(store.state.BusquedaInstituciones === ""){
        obtenerInstituciones();
    } else {
        busqueda();
    }

})

//Si se crea una nueva institucion se actualiza la lista
watch(() => store.state.CrearInstitucion, () => {
    obtenerInstituciones();
    store.state.CrearInstitucion = false;
})


//Si busqueda instituciones es vacio me devuelve todos si no pues solo la busqueda
watch(() => store.state.BusquedaInstituciones, () => {
    if(store.state.BusquedaInstituciones === ""){
        obtenerInstituciones();
    } else {
        busqueda();
    }
})

/****************************************             METODOS             **********************************************/

const obtenerInstituciones = async () => {
    instituciones.value = await DatosInstituciones.getInstituciones(props.pagina);

    instituciones.value.map((item) => {
        return {
            institucion_id: item.institucion_Id,
            nombre: item.nombre,
            estado: item.estado,
            pais: item.pais,
            identificacion: item.identificacion,
            direccion: item.direccion
        }
    })

    carga.value = false;
}


//Devuelve las instituciones que coincidan con la busqueda y el numero de pagina
const busqueda = async () => {
    instituciones.value = await DatosInstituciones.getBusquedaInstituciones(props.pagina, store.state.BusquedaInstituciones)

    instituciones.value.map((item) => {
        return {
            institucion_id: item.institucion_Id,
            nombre: item.nombre,
            estado: item.estado,
            pais: item.pais,
            identificacion: item.identificacion,
            direccion: item.direccion
        }
    })
}

const eliminarInstitucion = async (index, id) => {
    //Elimina la institucion visualmente
    instituciones.value.splice(index, 1);
    //Elimina la institucion de la base de datos
    await DatosInstituciones.deleteInstitucion(id);

    var tamano = 0

    //Si esta en busqueda o no dependiendo
    if(store.state.BusquedaInstituciones === ""){
        //Verifica que el numero de paginas cambie
        tamano = await DatosInstituciones.getPaginas()
    } else {
        tamano = await DatosInstituciones.getPaginasBusqueda(store.state.BusquedaInstituciones)
    }

    store.state.Paginacion = tamano.paginas
}
</script>

<template>
    <tr class="contenedor" v-if="carga">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="d-flex align-items-center contenedor">
            <div class="custom-loader"></div>
        </td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr v-for="(institucion, index) in instituciones" v-if="!carga">
        <td>{{ index + 1 }}</td>
        <td>{{ institucion.nombre }}</td>
        <td>{{ institucion.estado }}</td>
        <td>{{ institucion.pais }}</td>
        <td>{{ institucion.identificacion }}</td>
        <td>{{ institucion.direccion }}</td>
        <td><i class="bi bi-pencil-fill edit"></i></td>
        <td><i class="bi bi-trash3-fill delete" @click="eliminarInstitucion(index, institucion.institucion_Id)"></i></td>
    </tr>
</template>

<style scoped>
.contenedor {
    height: 200px;
}

.custom-loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid;
    border-color: #E4E4ED;
    border-right-color: #766DF4;
    animation: s2 1s infinite linear;
}

@keyframes s2 {
    to {
        transform: rotate(1turn)
    }
}

.edit:hover {
    color: royalblue;
    cursor: pointer;
    transition: .2s;
}

.delete:hover {
    color: red;
    cursor: pointer;
    transition: .2s;
}
</style>