<script setup>
import { ref } from "vue";
import router from "@/router";

const vistaUser = ref(false);
const vistaAdmin = ref(true);
const currentRoute = ref(router.currentRoute.value.name);

const irContratos = () => {
  router.push('/ContratosAdmin');
  currentRoute.value = 'ContratosAdmin';
};

const irUsuarios = () => {
  router.push('/UsuariosAdmin');
  currentRoute.value = 'UsuariosAdmin';
};

const irInstituciones = () => {
  router.push('/InstitucionesAdmin');
  currentRoute.value = 'InstitucionesAdmin';
};
</script>

<template>
  <nav class="w-100 h-100 d-flex flex-column justify-content-between" style="background-color: white; box-shadow: 8px 0 10px rgba(0, 0, 0, 0.1)">
    <!-- USUARIO -->
    <div class="user d-flex flex-column align-items-center" v-if="vistaUser">
      <div class="h4 d-flex justify-content-center align-items-center" style="width: 100%; height: 50px;font-weight: bold">CONTRATOS</div>
      <div class="d-flex justify-content-center align-items-center contrato">
        <div class="w-50">
          Contrato 01
        </div>
        <i class="bi bi-file-text-fill"></i>
      </div>
    </div>
    <!-- ADMINISTRADOR -->
    <div class="user d-flex flex-column align-items-center" v-if="vistaAdmin">
      <div class="h4 d-flex justify-content-center align-items-center" style="width: 100%; height: 50px;font-weight: bold">REGISTROS</div>
      <div class="d-flex justify-content-center align-items-center contrato" @click="irInstituciones" :class="{ 'activo': currentRoute === 'InstitucionesAdmin' }">
        <div class="w-50">
          Instituciones
        </div>
        <i class="bi bi-bank2"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center contrato" @click="irUsuarios" :class="{ 'activo': currentRoute === 'UsuariosAdmin' }">
        <div class="w-50">
          Usuarios
        </div>
        <i class="bi bi-people"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center contrato" @click="irContratos" :class="{ 'activo': currentRoute === 'ContratosAdmin' }">
        <div class="w-50">
          Contratos
        </div>
        <i class="bi bi-file-text-fill"></i>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center salir">
      <div class="w-50">
        SALIR
      </div>
      <i class="bi bi-box-arrow-left"></i>
    </div>
  </nav>
</template>

<style scoped>
.salir{
  width: 100%;
  height: 50px;
  cursor: pointer;
}
.salir:hover {
  background-color: rgba(255, 0, 0, .6);
  color: white;
}
.contrato {
  width: 100%;
  height: 50px;
  cursor: pointer;
}

.contrato:hover {
  background-color: #1B365D;
  color: white;
}

.activo {
  background-color: #1B365D;
  color: white;
}
</style>
