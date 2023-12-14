<script setup>
import {onMounted, ref} from "vue";
import router from "@/router";
import {CREDENCIALES} from "@/utils/constantes/Constantes";
import {DatosPersonales} from "@/api/provides/usuario.services";
import store from "@/store";

const vistaAdmin = ref(store.state.vistaAdmin);
const vistaUser = ref(store.state.vistaUser);
const currentRoute = ref(router.currentRoute.value.name);
const contratosUsuario = ref([])
const btnSalir = ref(false)

onMounted(() => {
  verContratosUsuarios()
})
const irContratos = () => {
    router.push('/Contratos');
    currentRoute.value = 'ContratosAdmin';
};

const irUsuarios = () => {
    router.push('/Usuarios');
    currentRoute.value = 'UsuariosAdmin';
};

const irInstituciones = () => {
    router.push('/Instituciones');
    currentRoute.value = 'InstitucionesAdmin';
};

const verContratosUsuarios = async () =>{
  contratosUsuario.value = await DatosPersonales.getContratosUser()
  contratosUsuario.value.map((item) => {
    return {
      contratos_Id:item.contratos_Id,
      nombre: item.nombre
    }
  })

  console.log(contratosUsuario.value)
}
const irContratoUser = (id) =>{
  console.log(id)
  router.push({
    name: 'Contrato',
    params: { idContrato: id }
  });
 // currentRoute.value = id;
}

const salir = async () => {
  btnSalir.value = true;
  setTimeout(function () {
    localStorage.removeItem(CREDENCIALES);
    router.push('/');
  }, 1000);
};

const esRutaContrato = (idContrato) => {
  return router.currentRoute.value.name === 'Contrato' && router.currentRoute.value.params.idContrato === idContrato.toString();
};

const esRutaContratoAdmin = () =>{
  return router.currentRoute.value.name.startsWith('Contrato');
}



/*const verificarRol = async () => {
  try {
    var rol = await DatosPersonales.userRol();
    console.log(rol);

    if (rol === "Administrador") {
      vistaAdmin.value = true;
      vistaUser.value = false;
    } else {
      vistaUser.value = true;
      vistaAdmin.value = false;
    }
  } catch (error) {
    console.error("Error al verificar el rol:", error);
  }
}*/
</script>

<template>
    <nav class="w-100 h-100 d-flex flex-column justify-content-between"
         style="background-color: white; box-shadow: 8px 0 10px rgba(0, 0, 0, 0.1)">
        <!-- USUARIO -->
      <div class="user d-flex flex-column align-items-center" v-if="vistaUser">
        <div class="h4 d-flex justify-content-center align-items-center"
             style="width: 100%; height: 50px;font-weight: bold">
          CONTRATOS
        </div>
        <div class="d-flex justify-content-center align-items-center contrato"
             v-for="(ContratosUsuarios, index) in contratosUsuario"
             :class="{ 'activo': esRutaContrato(ContratosUsuarios.contratos_Id) }"
             @click="irContratoUser(ContratosUsuarios.contratos_Id)"
        >
          <div class="w-50">
            {{ ContratosUsuarios.nombre }}
          </div>
          <i class="bi bi-file-text-fill"></i>
          <i class="bi bi-exclamation-circle-fill" style="font-size: 12px; margin-left: 5px;color: #d7ac00"></i>
        </div>

      </div>
        <!-- ADMINISTRADOR -->
        <div class="user d-flex flex-column align-items-center" v-if="vistaAdmin">
            <div class="h4 d-flex justify-content-center align-items-center"
                 style="width: 100%; height: 50px;font-weight: bold">REGISTROS
            </div>
            <div class="d-flex justify-content-center align-items-center contrato" @click="irContratos"
                 :class="{ 'activo': esRutaContratoAdmin() }">
                <div class="w-50">
                    Contratos
                </div>
                <i class="bi bi-file-text-fill"></i>
            </div>
            <div class="d-flex justify-content-center align-items-center contrato" @click="irInstituciones"
                 :class="{ 'activo': currentRoute === 'InstitucionesAdmin' }">
                <div class="w-50">
                    Instituciones
                </div>
                <i class="bi bi-bank2"></i>
            </div>
            <div class="d-flex justify-content-center align-items-center contrato" @click="irUsuarios"
                 :class="{ 'activo': currentRoute === 'UsuariosAdmin' }">
                <div class="w-50">
                    Usuarios
                </div>
                <i class="bi bi-people"></i>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center salir" @click="salir" :class="{ 'salido': btnSalir }">
            <div class="w-50">
                SALIR
            </div>
            <i class="bi bi-box-arrow-left"></i>
        </div>
    </nav>
</template>

<style scoped>
.salido{
  background-color: #a6a1a1;
  pointer-events: none;
}
.salir {
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
    color: royalblue;
}

.activo {
    background-color: #1B365D;
    color: white;
}
</style>
