<script setup>
import {DatosPersonales} from "@/api/provides/usuario.services";
import {ref} from "vue";

const Correo = ref('');
const Password = ref('');

const obtenerDatosUsuario = async () => {
    await DatosPersonales.loginUser(Correo.value, Password.value);
}

const IniciarSesion = () =>{
  fetch()
}
</script>

<template>
  <section class="vh-100" style="background-color: #1B365D;">
    <img src="../../assets/imagenes/UAC.png" class="position-absolute">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <img src="../../assets/imagenes/LogoConvenios.png" style="background-color: #1B365D; width: 450px">
        <div class="col col-xl-5">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-12 d-flex align-items-center">
                <div class="card-body  p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center justify-content-center form-label">
                      <span class="h1 fw-bold mb-0">Iniciar Sesión</span>
                    </div>
                    <div class="form-outline mb-4">
                      <input v-model="Correo" type="email" id="form2Example17" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example17">Correo Electronico</label>
                    </div>
                    <div class="form-outline mb-4">
                      <input v-model="Password" type="password" id="form2Example27" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example27">Contraseña</label>
                    </div>
                    <div class="pt-1 mb-4">
                      <button class="btn boton btn-lg btn-block" type="button" @click="obtenerDatosUsuario()">Ingresar</button>
                    </div>
                    <a class="small olvidar" role="button">¿Olvidaste tu contraseña?</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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