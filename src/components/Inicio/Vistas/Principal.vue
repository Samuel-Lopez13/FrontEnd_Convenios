<script setup>
import Sidebar from "@/components/Inicio/Vistas/Sidebar.vue";
import {onMounted, ref} from "vue";
import {verificarAcceso} from "@/utils/constantes/Constantes";
import router from "@/router";
import {DatosPersonales} from "@/api/provides/usuario.services";

const nombreUsuario = ref('');
const Administrador = ref(false);

onMounted(()=>{
  verificarAcceso();
  tipoUsuario();
  verificarAdmin();
})

const tipoUsuario = async () => {
  var data = await DatosPersonales.userRol()
  nombreUsuario.value = data.nombre;
}
const verificarAdmin = async () => {
  var data = await DatosPersonales.userRol();
  var rol = data.rol;
  if (rol === "Administrador") {
    Administrador.value = true;
  }
}
</script>

<template>
    <div class="parent w-100 vh-100">
        <div class="div1 p-3 d-flex justify-content-between align-items-center" style="background-color: #1B365D; height: 100px; padding-left: 20px; box-shadow: 0 2px 5px rgba(0, 0, 50, 0.5); position: relative; z-index: 1">
            <img src="../../../assets/imagenes/UAC.png" style="width: 150px; height: 75px">
            <div class="User h4 d-flex" style="color: #fefefe;margin-right: 20px">
                {{ nombreUsuario }}  <span v-if="Administrador" style="margin-left: 5px; color:#d7ac00">(Administrador)</span>  <i class="bi bi-three-dots-vertical"></i>

            </div>
        </div>
        <div class="div2 d-flex justify-content-center align-items-center" style="background-color: #1B365D">
          <p class="fs-5" style="color: #fefefe">Todos los derechos reservados © Firma de convenios 2023 | <span class="acerca">Acerca de esta pagina</span></p>
        </div>
        <div class="div3">
            <Sidebar/>
        </div>
        <div class="div4 p-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.acerca:hover{
  color: #d7ac00;
  transition: .3s;
  cursor: pointer;
}
.bi-three-dots-vertical:hover{
  color: #d7ac00;
  cursor: pointer;
}
.parent {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr 100px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 3;
}

.div2 {
    grid-area: 3 / 1 / 4 / 3;
}

.div3 {
    grid-area: 2 / 1 / 3 / 2;
}

.div4 {
    width: 100%;
    height: 100%;
    grid-area: 2 / 2 / 3 / 3;
}
</style>