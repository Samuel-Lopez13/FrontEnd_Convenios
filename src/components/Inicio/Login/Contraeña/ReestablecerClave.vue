<script setup>
import {onMounted, ref} from "vue";
import router from "@/router";
const Password = ref('');
const Password2 = ref('');
const tipo = ref('password');
const tipo2 = ref('password');

onMounted(()=>{

})
const verClave = () =>{
  if (tipo.value === 'password'){
    tipo.value = 'text'
  }else{
    tipo.value='password'
  }
}

const verClave2 = () =>{
  if (tipo2.value === 'password'){
    tipo2.value = 'text'
  }else{
    tipo2.value='password'
  }
}

const cambiarContraseña = () => {
  router.push('/IniciarSesion')
}
</script>

<template>
  <form>
    <div class="d-flex flex-column align-items-center justify-content-center form-label">
      <span class="h1 fw-bold mb-2">Cambiar contraseña</span>
      <span class="h6">Escribe una nueva contraseña.</span>
    </div>
    <div class="form-outline mb-4">
      <label class="form-label" for="form2Example27">Crea tu nueva contraseña</label>
      <div class="d-flex justify-content-end align-items-center">
        <input v-model="Password" :type="tipo" id="form2Example27" class="form-control form-control-lg" />
        <i class="ver position-absolute" style="margin-right: 15px" :class="tipo === 'password' ? 'bi bi-eye-slash-fill' : 'bi-eye-fill'" role="button"
           @click="verClave"
        ></i>
      </div>
    </div>
    <div class="form-outline mb-4">
      <label class="form-label" for="form2Example27">Confirma tu nueva contraseña</label>
      <div class="d-flex justify-content-end align-items-center">
        <input v-model="Password2" :type="tipo2" id="form2Example27" class="form-control form-control-lg" />
        <i class="ver position-absolute" style="margin-right: 15px" :class="tipo2 === 'password' ? 'bi bi-eye-slash-fill' : 'bi-eye-fill'" role="button"
           @click="verClave2"
        ></i>
      </div>
    </div>
    <div class="pt-1 mb-4">
      <button class="btn boton btn-lg btn-block form-control" type="button" @click="cambiarContraseña">Confirmar</button>
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
.olvidar{
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: all .3s;
}
.olvidar:hover{
  color: #1B365D;
  font-size: 16px;
}
</style>