<script setup>
/****************************************             IMPORT             ***********************************************/

import {DatosPersonales} from "@/api/provides/usuario.services";
import {ref, onMounted, watch} from "vue";
import store from "@/store";
import {DatosInstituciones} from "@/api/provides/institucion.services";
import {NotificacionAdvertencia} from "@/alertas/alerts";

/****************************************             PROPS             ************************************************/

const props = defineProps(['pagina']);

/**************************************             VARIABLES             **********************************************/

const usuarios = ref([]);
const carga = ref(true);

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    obtenerUsuarios();
})

/****************************************             WATCH              ***********************************************/

//Si se cambia de pagina se actualiza la lista y se actualizara dependiendo si esta en busqueda o no
watch(() => props.pagina, () => {
    if(store.state.BusquedaUsuarios === ""){
        obtenerUsuarios();
    } else {
        busqueda();
    }

})

//Si se crea una nueva institucion se actualiza la lista
watch(() => store.state.CrearUsuario, () => {
    obtenerUsuarios();
    store.state.CrearUsuario = false;
})


//Si busqueda instituciones es vacio me devuelve todos si no pues solo la busqueda
watch(() => store.state.BusquedaUsuarios, () => {
    if(store.state.BusquedaUsuarios === ""){
        obtenerUsuarios();
    } else {
        busqueda();
    }
})

/****************************************             METODOS             **********************************************/

const obtenerUsuarios = async () => {
    usuarios.value = await DatosPersonales.getUsuarios(props.pagina);

    usuarios.value.map((item) => {
        return {
            usuario_Id: item.usuario_Id,
            email: item.email,
            nombre: item.nombre,
            institucion: item.institucion
        }
    })

    carga.value = false;
}

//Devuelve los usuarios que coincidan con la busqueda y el numero de pagina
const busqueda = async () => {
    usuarios.value = await DatosPersonales.getBusquedaUsuario(props.pagina, store.state.BusquedaUsuarios)

    usuarios.value.map((item) => {
        return {
            usuario_Id: item.usuario_Id,
            email: item.email,
            nombre: item.nombre,
            institucion: item.institucion
        }
    })
}

const eliminarUsuario = async (index, id) => {
  const eliminar = await NotificacionAdvertencia.Eliminar('¿Seguro que deseas eliminar este usuario?')
  if (eliminar.isConfirmed) {
    //Elimina al usuario visualmente
    usuarios.value.splice(index, 1);
    //Elimina al usuario de la base de datos
    await DatosPersonales.deleteUsuario(id);

    var tamano = 0

    //Si esta en busqueda o no dependiendo
    if (store.state.BusquedaUsuarios === "") {
      //Verifica que el numero de paginas cambie
      tamano = await DatosPersonales.getPaginas()
    } else {
      tamano = await DatosPersonales.getPaginasBusqueda(store.state.BusquedaUsuarios)
    }

    store.state.PaginacionU = tamano.paginas
  }
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
  <tr v-for="(usuarios, index) in usuarios" v-if="!carga">
    <th>{{index + 1}}</th>
    <td>{{ usuarios.nombre }}</td>
    <td>{{ usuarios.email }}</td>
    <td>{{ usuarios.institucion }}</td>
    <td><i class="bi bi-pencil-fill edit"></i></td>
    <td><i class="bi bi-trash3-fill delete" @click="eliminarUsuario(index, usuarios.usuario_Id)"></i></td>
  </tr>
</template>

<style scoped>
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