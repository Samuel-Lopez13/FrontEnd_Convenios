<script setup>
import {ref, watch} from 'vue';
import router from "@/router";
import {NotificacionError} from "@/alertas/alerts";
import {DatosInstituciones} from "@/api/provides/institucion.services";

const pais = ref("");
const estado = ref("");
const ciudad = ref("");
const identificacion = ref("");
const direccion = ref("");
const boton = ref(false);

const checkboxChecked = ref(false);
const emit = defineEmits('CerrarDatosInst')


watch([() => pais.value,() => estado.value, () => ciudad.value,() => identificacion.value, () => direccion.value, () => checkboxChecked.value], ([newNombre,newEmail, newInstitucion, newDirec, newIdent,newcheckboxChecked]) => {
  // Lógica a ejecutar cuando cualquiera de los valores cambie
  validarBoton();
});
const Modificar = async () =>{
    await DatosInstituciones.updateInstitucion(pais.value,estado.value,ciudad.value,identificacion.value,direccion.value)
    emit('CerrarDatosInst')
}

const validarBoton = () =>{
  if (pais.value != "" && estado.value != "" &&
      ciudad.value != "" && identificacion.value != ""
      && direccion.value != "" && checkboxChecked.value === true){
    boton.value = true;
  }else{
    boton.value = false;
  }
}
</script>

<template>
  <div class="agregar">
    <div class="titulo d-flex justify-content-center align-items-center">
      <h3 style="font-size: 22px">Completa los datos de tu Institución</h3>
    </div>
    <form class="formulario p-4 d-flex flex-column align-items-center">
      <div class="Nombre pb-3 d-flex flex-column">
        <label class="form-label">Pais</label>
        <input type="text" class="form form-control form-label" v-model="pais">
      </div>
      <div class="Nombre pb-3 d-flex flex-column">
        <label class="form-label">Estado</label>
        <input type="text" class="form form-control form-label" v-model="estado">
      </div>
      <div class="Nombre pb-3 d-flex flex-column">
        <label class="form-label">Ciudad</label>
        <input type="text" class="form form-control form-label" v-model="ciudad">
      </div>
      <div class="Nombre pb-3 d-flex flex-column">
        <label class="form-label">Identificación</label>
        <input type="text" class="form form-control form-label" v-model="identificacion">
      </div>
      <div class="Nombre pb-3 d-flex flex-column">
        <label class="form-label">Dirección</label>
        <input type="text" class="form form-control form-label" v-model="direccion">
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex form-label">
          <input type="checkbox" class="form-check" v-model="checkboxChecked">
          <p style="margin-bottom: 0; margin-left: 5px">Manifiesto que los datos escritos son correctos</p>
        </div>
        <div class="btn btn-primary form-label d-flex justify-content-center align-items-center" :class="{ 'disabled': !boton}" @click="Modificar">
          Enviar
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.agregar {
  width: auto;
  height: auto;
  background-color: #fefefe;
  box-shadow: 8px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.form{
  width: 300px;
}

.titulo {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 70px;
  box-shadow: 0px 2px 4px -3px #1B365D;
  color: #1B365D;
}

h3 {
  line-height: 3;
  margin: 0;
}

.btn {
  width: 300px;
  height: 45px;
}

</style>