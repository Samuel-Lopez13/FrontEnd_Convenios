<script setup>
import {ref} from "vue";

const vistaUser = ref(true)
const vistaAdmin = ref(true)
</script>

<template>
  <nav class="w-100 h-100" style="background-color: gray">
    <!-- USUARIO -->
    <div class="user d-flex flex-column align-items-center" v-if="vistaUser">
      <div class="h4 d-flex justify-content-center align-items-center" style="width: 100%; height: 50px;font-weight: bold">CONTRATOS</div>
      <div role="button" class="d-flex justify-content-center align-items-center contrato">
        <div class="w-50">
          Contrato 01
        </div>
        <i class="bi bi-file-text-fill"></i>
      </div>
    </div>
    <!--ADMINISTRADOR-->
    <div class="user d-flex flex-column align-items-center" v-if="vistaAdmin">
      <div class="h4 d-flex justify-content-center align-items-center" style="width: 100%; height: 50px;font-weight: bold">REGISTROS</div>
      <div role="button" class="d-flex justify-content-center align-items-center contrato">
        <div class="w-50">
          Instituciones
        </div>
        <i class="bi bi-bank2"></i></div>
      <div role="button" class="d-flex justify-content-center align-items-center contrato">
        <div class="w-50">
          Usuarios
        </div> <i class="bi bi-people"></i></div>
      <div role="button" class="d-flex justify-content-center align-items-center contrato">
        <div class="w-50">
          Contratos
        </div> <i class="bi bi-file-text-fill"></i></div>
    </div>
  </nav>
</template>

<style scoped>
.contrato{
  width: 100%;
  height: 50px;
}
.contrato:hover{
  background-color: #1B365D;
  color: white;
}
</style>