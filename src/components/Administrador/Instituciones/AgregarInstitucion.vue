<script setup>
import Instituciones from "@/components/Administrador/Instituciones/Instituciones.vue";
</script>

<template>
  <div class="agregar">
    <div class="titulo d-flex justify-content-center align-items-center">
      <h3>Agregar nueva institución</h3>
    </div>
    <form class="formulario p-5 d-flex flex-column align-items-center">
      <div class="Nombre d-flex flex-column">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control form-label">
      </div>
      <div class="boton form-label d-flex justify-content-center align-items-center" @click="">Agregar</div>
    </form>
  </div>
</template>

<style scoped>
.agregar{
  width: 400px;
  height: auto;
  background-color: #fefefe;
  box-shadow: 8px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.titulo{
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #1B365D;
  color: #1B365D;
}
.boton {
  background: #1B365D;
  color: #fefefe;
  width: 207px;
  height: 45px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.boton:hover{
  background-color: rgba(27, 54, 93, 0.9);
}
</style>