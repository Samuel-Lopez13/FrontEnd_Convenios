<script setup>
import {ref, onMounted, watch} from "vue";

const props = defineProps(['pagina']);

const usuarios = ref([]);
//const carga = ref(true);


const eliminarUsuario = async (id) => {
  usuarios.value.splice(id, 1);
}
</script>

<template>
  <tr v-for="(usuarios, index) in usuarios" v-if="!carga">
    <th>{{index + 1}}</th>
    <td>{{ usuarios.nombre }}</td>
    <td>{{ usuarios.email }}</td>
    <td>{{ usuarios.institucion }}</td>
    <td><i class="bi bi-pencil-fill edit"></i></td>
    <td><i class="bi bi-trash3-fill delete" @click="eliminarUsuario(index)"></i></td>
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