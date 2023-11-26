<script setup>
import {DatosContratos} from "@/api/provides/institucion.services";
import {ref, onMounted, watch} from "vue";

const props = defineProps(['pagina']);

const contratos = ref([]);
//const carga = ref(true);

onMounted(() => {
  obtenerContratos();
  //carga.value = false;
})

watch(() => props.pagina, () => {
  obtenerContratos();
})

const obtenerContratos = async () => {
  console.log(props.pagina);
  contratos.value = await DatosContratos.getContratos(props.pagina);
  contratos.value.map((item) => {
    return {
      id: item.contrat_Id,
      nombre: item.nombre,
      objeto: item.Objeto,
      inicio: item.FechaInicio,
      termino: item.FechaTermino,
      archivo: item.Archivo,
      institucion: item.Institucion
    }
  })
}

const eliminarContrato = async (id) => {
  contratos.value.splice(id, 1);
}
</script>

<template>
  <tr v-for="(contratos, index) in contratos" v-if="!carga">
    <th>{{index + 1}}</th>
    <td>{{ contratos.nombre }}</td>
    <td>{{ contratos.objeto }}</td>
    <td>{{ contratos.inicio }}</td>
    <td>{{ contratos.termino }}</td>
    <td>{{ contratos.archivo }}</td>
    <td>{{ contratos.institucion }}</td>
    <td><i class="bi bi-pencil-fill edit"></i></td>
    <td><i class="bi bi-trash3-fill delete" @click="eliminarContrato(index)"></i></td>
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