<script setup>
import MensajeContraP from "@/components/Usuarios/Chat/MensajeContraP.vue";
import MensajeUser from "@/components/Usuarios/Chat/MensajeUser.vue";
import Opciones from "@/components/Usuarios/Opciones.vue";

</script>

<template>
  <div class="contenedor w-100 h-100 d-flex bg-light">
    <div class="vistaDocumento d-flex justify-content-center align-items-center">
      <iframe src="https://docs.google.com/gview?url=https://github.com/Samuel-Lopez13/FrontEnd_Convenios/raw/main/Prueba.docx&embedded=true"
              style="width:800px; height:100%;">
      </iframe>
    </div>
    <opciones/>
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
  height: 80%;
  width: 80%;
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
.chat{
  width: 30%;
  height: 100%;
}
.contenedor{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #cccccc;
}
</style>