<script setup>
import {onMounted, ref} from "vue";
import {DatosPersonales} from "@/api/provides/usuario.services";

const btnRevision = ref(true)
const btnFirmar = ref(false)
const btnCambios = ref(true)
const Admin = ref(false)

onMounted(async ()=>{
  await verificarRol();
})
const verificarRol = async () =>{
  var rol = await DatosPersonales.userRol()
  console.log(rol)
  if (rol === "Administrador"){
    Admin.value = true;
  }
}

</script>

<template>
  <div class="botones  p-3">
    <div class="fase h4 d-flex justify-content-center align-items-center">
      FASE #
    </div>
    <h5 class="h5 text-center mb-3">Status : A/I</h5>
    <div class="opciones d-flex flex-column justify-content-between">
      <div class="accione">
        <form class="d-flex flex-column gap-3 align-items-center">
          <label class="form-label">Subir una modificación</label>
          <input type="file" class="form form-control form-label">
          <button class="btn btn-warning form-label form-control" :class="{ 'disabled': !btnRevision }">Mandar a Revisión</button>
        </form>
        <div class="botonUser" v-if="!Admin">
          <button class="btn btn-success form-label form-control" :class="{ 'disabled': !btnFirmar }">Firmar</button>
        </div>
        <div class="botonesAdmin d-flex flex-column" v-if="Admin">
          <button class="btn btn-danger form-label" :class="{ 'disabled': !btnFirmar }">Cambiar Fase</button>
          <button class="btn btn-success form-label" :class="{ 'disabled': !btnFirmar }">Mandar a Firma</button>
        </div>
      </div>
      <button class="btn btn-primary form-label" :class="{ 'disabled': !btnCambios }">Verificar Cambios</button>
    </div>
  </div>
</template>

<style scoped>
.form{
  width: 100%;
}
.opciones{
  width: 100%;
  height: calc(100% - 160px);
  margin-top: 60px;
}
.fase{
  width: 100%;
  height: 70px;
}

.botones{
  width: 15%;
  height: 100%;
  border-right: 1px solid #cccccc;
}
</style>