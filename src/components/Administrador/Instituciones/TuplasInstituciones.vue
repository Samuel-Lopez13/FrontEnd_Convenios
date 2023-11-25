<script setup>
import {DatosInstituciones} from "@/api/provides/institucion.services";
import {ref, onMounted, watch} from "vue";

const props = defineProps(['pagina']);

const instituciones = ref([]);
//const carga = ref(true);

onMounted(() => {
    obtenerInstituciones();
    //carga.value = false;
})

watch(() => props.pagina, () => {
    obtenerInstituciones();
})

const obtenerInstituciones = async () => {
    console.log(props.pagina);
    instituciones.value = await DatosInstituciones.getInstituciones(props.pagina);

    instituciones.value.map((item) => {
        return {
            id: item.institucion_Id,
            nombre: item.nombre,
            estado: item.estado,
            pais: item.pais,
            identificacion: item.identificacion,
            direccion: item.direccion
        }
    })
}

const eliminarInstitucion = async (id) => {
    instituciones.value.splice(id, 1);
}
</script>

<template>
    <!--<div class="custom-loader" v-if="carga"></div>-->
    <tr v-for="(instituciones, index) in instituciones" v-if="!carga">
        <th>{{ index + 1 }}</th>
        <td>{{ instituciones.nombre }}</td>
        <td>{{ instituciones.estado }}</td>
        <td>{{ instituciones.pais }}</td>
        <td>{{ instituciones.identificacion }}</td>
        <td>{{ instituciones.direccion }}</td>
        <td><i class="bi bi-pencil-fill edit"></i></td>
        <td><i class="bi bi-trash3-fill delete" @click="eliminarInstitucion(index)"></i></td>
    </tr>
</template>

<style scoped>
/*.custom-loader {
    width:50px;
    height:50px;
    border-radius:50%;
    border:8px solid;
    border-color:#E4E4ED;
    border-right-color: #766DF4;
    animation:s2 1s infinite linear;
}
@keyframes s2 {to{transform: rotate(1turn)}}*/

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