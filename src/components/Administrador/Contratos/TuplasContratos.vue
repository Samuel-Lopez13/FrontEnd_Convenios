<script setup>

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