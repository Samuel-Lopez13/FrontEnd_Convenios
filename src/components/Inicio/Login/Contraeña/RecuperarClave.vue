<script setup>

import router from "@/router";

const irVerificacion = () =>{
  router.push('/VerificarCodigo')
}
</script>

<template>
  <form>
    <div class="d-flex flex-column align-items-center justify-content-center form-label">
      <span class="h1 fw-bold mb-2">Recuperar Contraseña</span>
      <span class="h6">Ingresa tu correo electronico, se te enviará un código de verificación.</span>
    </div>
    <div class="form-outline mb-6">
      <label class="form-label" for="form2Example17">Correo Electronico</label>
      <input v-model="Correo" type="email" id="form2Example17" class="form-control form-control-lg" />
    </div>
    <div class="pt-1 mt-3">
      <button class="btn boton btn-lg btn-block form-control" type="button" @click="irVerificacion">Enviar</button>
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