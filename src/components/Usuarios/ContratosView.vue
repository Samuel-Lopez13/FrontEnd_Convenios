<script setup>
import MensajeContraP from "@/components/Usuarios/Chat/MensajeContraP.vue";
import MensajeUser from "@/components/Usuarios/Chat/MensajeUser.vue";
import {ref} from "vue";

const btnRevision = ref(true)
const btnFirmar = ref(false)
const btnCambios = ref(true)

</script>

<template>
  <div class="contenedor w-100 h-100 d-flex bg-light">
    <div class="vistaDocumento d-flex justify-content-center align-items-center">
      <iframe src="https://docs.google.com/gview?url=https://github.com/Samuel-Lopez13/FrontEnd_Convenios/raw/main/Prueba.docx&embedded=true"
              style="width:800px; height:100%;">

      </iframe>
    </div>
    <div class="botones  p-3">
      <div class="fase h4 d-flex justify-content-center align-items-center">
        FASE #
      </div>
      <div class="opciones d-flex flex-column">
        <h5 class="h5 text-center mb-3">Status : Activo/Desactivo</h5>
        <form class="d-flex flex-column gap-3 align-items-center">
            <label class="form-label">Subir una modificación</label>
            <input type="file" class="form form-control form-label">
          <button class="btn btn-warning form-control" :class="{ 'disabled': !btnRevision }">Mandar a Revisión</button>
        </form>
        <br>
        <button class="btn btn-primary  mb-3" :class="{ 'disabled': !btnCambios }">Verificar Cambios</button>
        <button class="btn btn-success " :class="{ 'disabled': !btnFirmar }">FIRMAR</button>
      </div>
    </div>
    <div class="chat bg-light">
        <div class="nombreContrato h3 m-0 d-flex align-items-center justify-content-center">
          CONTRATO 01
        </div>
        <div class="contenidoChat">
          <MensajeContraP/>
          <MensajeUser/>
        </div>
        <div class="inputChat d-flex justify-content-center align-items-center gap-3">
              <textarea class="form-control textChat" id="textAreaExample2"></textarea>
              <button class="btn btn-primary">Enviar</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.textChat{
  width: 80%;
}
.form{
  width: 100%;
}
.opciones{
  width: 100%;
  height: calc(100% - 70px);
}
.fase{
  width: 100%;
  height: 70px;
}
.inputChat{
  width: 100%;
  height: calc(100% - 620px);
  background-color: #E4E4ED;
}
.contenidoChat{
  width: 100%;
  height: 520px;
  overflow-y: auto;
}
.nombreContrato{
  width: 100%;
  height: 100px;
}
.vistaDocumento{
  width: 55%;
  height: 100%;
  border-right: 1px solid #cccccc;
}
.botones{
  width: 15%;
  height: 100%;
  border-right: 1px solid #cccccc;
}
.chat{
  width: 30%;
  height: 100%;
}
.contenedor{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #cccccc;
}
</style>