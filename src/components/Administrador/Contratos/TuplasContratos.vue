<script setup>
/****************************************             IMPORT             ***********************************************/
import {DatosContratos} from "@/api/provides/contratos.services";
import {ref, onMounted, watch} from "vue";
import store from "@/store";
import router from "@/router";
import {NotificacionAdvertencia} from "@/alertas/alerts";

/****************************************             PROPS             ************************************************/

const props = defineProps(['pagina']);

/**************************************             VARIABLES             **********************************************/

const contratos = ref([]);
const carga = ref(true);

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    obtenerContratos();
})

/****************************************             WATCH              ***********************************************/

//Si se cambia de pagina se actualiza la lista y se actualizara dependiendo si esta en busqueda o no
watch(() => props.pagina, () => {
    if(store.state.BusquedaContratos === ""){
        obtenerContratos();
    } else {
        busqueda();
    }

})

//Si se crea un nuevo contrato se actualiza la lista
watch(() => store.state.CrearContrato, () => {
    obtenerContratos();
    store.state.CrearContrato = false;
})


//Si busqueda contrato es vacio me devuelve todos si no pues solo la busqueda
watch(() => store.state.BusquedaContratos, () => {
    if(store.state.BusquedaContratos === ""){
        obtenerContratos();
    } else {
        busqueda();
    }
})


/****************************************             METODOS             **********************************************/

const obtenerContratos = async () => {
    contratos.value = await DatosContratos.getContratos(props.pagina);
    contratos.value.map((item) => {
        return {
            contrato_Id: item.contrato_Id,
            nombre: item.nombre,
            descripcion: item.descripcion,
            fechaCreacion: item.fechaCreacion,
            fechaFinalizacion: item.fechaFinalizacion,
            file: item.file,
            nombreFile: item.nombreFile,
            institucion: item.institucion
        }
    })
    carga.value = false;
}

//Devuelve las instituciones que coincidan con la busqueda y el numero de pagina
const busqueda = async () => {
    contratos.value = await DatosContratos.getBusquedaContratos(props.pagina, store.state.BusquedaContratos)
    contratos.value.map((item) => {
        return {
            contrato_Id: item.contrato_Id,
            nombre: item.nombre,
            descripcion: item.descripcion,
            fechaCreacion: item.fechaCreacion,
            fechaFinalizacion: item.fechaFinalizacion,
            file: item.file,
            nombreFile: item.nombreFile,
            institucion: item.institucion
        }
    })
}

const eliminarContrato = async (index, id) => {
    //Elimina el contrato visualmente
  const eliminar = await NotificacionAdvertencia.Eliminar('¿Seguro que deseas eliminar este contrato?')
  if (eliminar.isConfirmed) {
    contratos.value.splice(index, 1);
    //Elimina el contrato de la base de datos
    await DatosContratos.deleteContratos(id);

    var tamano = 0

    //Si esta en busqueda o no dependiendo
    if (store.state.BusquedaContratos === "") {
      //Verifica que el numero de paginas cambie
      tamano = await DatosContratos.getPaginas()
    } else {
      tamano = await DatosContratos.getPaginasBusqueda(store.state.BusquedaContratos)
    }

    store.state.PaginacionC = tamano.paginas
  }
}

const irContratoUser = (id) =>{
  console.log(id)
  router.push({
    name: 'Contrato',
    params: { idContrato: id }
  });
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
  <tr v-for="(contratos, index) in contratos" v-if="!carga">
    <th>{{index + 1}}</th>
    <td @click="irContratoUser(contratos.contrato_Id)" class="irContrato">{{ contratos.nombre }}</td>
    <td>{{ contratos.descripcion }}</td>
    <td>{{ contratos.fechaCreacion }}</td>
    <td>{{ contratos.fechaFinalizacion }}</td>
    <td>{{ contratos.nombreFile }}</td>
    <td>{{ contratos.institucion }}</td>
    <td><i class="bi bi-pencil-fill edit"></i></td>
    <td><i class="bi bi-trash3-fill delete" @click="eliminarContrato(index, contratos.contrato_Id)"></i></td>
  </tr>
</template>

<style scoped>
.custom-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #E4E4ED;
  border-right-color: #1B365D;
  animation: s2 1s infinite linear;
}

@keyframes s2 {
  to {
    transform: rotate(1turn)
  }
}
.irContrato:hover{
  cursor: pointer;
  color: royalblue;
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