<script setup>
import {DatosUsuarios} from "@/api/provides/institucion.services";
import {ref, onMounted, watch} from "vue";

const props = defineProps(['pagina']);

const usuarios = ref([]);
//const carga = ref(true);

onMounted(() => {
  obtenerUsuarios();
  //carga.value = false;
})

watch(() => props.pagina, () => {
  obtenerUsuarios();
})

const obtenerUsuarios = async () => {
  console.log(props.pagina);
  usuarios.value = await DatosUsuarios.getUsuarios(props.pagina);
    usuarios.value.map((item) => {
    return {
      id: item.usuario_Id,
      nombre: item.nombre,
      email: item.email,
      institucion: item.institucion
    }
  })
}

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