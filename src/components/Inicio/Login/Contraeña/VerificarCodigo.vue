<script setup>
import router from "@/router";

const irReestablecerClave = () =>{
  router.push('/ReestablecerClave')
}
</script>

<template>
  <form>
    <div class="d-flex flex-column align-items-center justify-content-center form-label">
      <span class="h1 fw-bold mb-2">Verificar Código</span>
      <span class="h6">Porfavor, ingresa el código de verificación que te recibiste en tu correo.</span>
    </div>
    <div class="form-outline mb-6">
      <label class="form-label" for="form2Example17">Ingresa el código</label>
      <input v-model="Codigo" type="email" id="form2Example17" class="form-control form-control-lg" />
    </div>
    <div class="pt-1 mt-3">
      <button class="btn boton btn-lg btn-block form-control" type="button" @click="irReestablecerClave">Validar</button>
    </div>
  </form>
</template>

<style scoped>
.h1{
  color: #1B365D;
}
.boton{
  background-color: #1B365D;
  color: white;
}
.boton:hover{
  background-color: rgba(28, 85, 168, 0.90);
}
</style>