<script setup>
const emit = defineEmits('CerrarCambios')

const cerrar = () => {
  emit('CerrarCambios')
}
</script>

<template>
    <div class="contenedor">
      <div class="header d-flex justify-content-end align-items-center p-3">
        <i class="bi bi-x-circle-fill cerrar" @click="cerrar"></i>
      </div>
      <div class="ventanas d-flex bg-light">
        <div class="ultimoArchivo h-100 d-flex justify-content-center align-items-center flex-column">
          <h4 class="text-center">Tu ultimo archivo</h4>
          <iframe
            src="https://docs.google.com/viewer?url=http://res.cloudinary.com/dnbwjuwvx/raw/upload/v1702411482/intercambio 24-1C.docx&embedded=true"
            style="width:100%; height:100%;">
          </iframe>
        </div>
        <div class="note p-2 d-flex align-items-center">
          <p><span style="color: red; font-weight: bold">NOTA:</span>
          Esta función es de prueba aún, puedes usarla de referencia, se recomienda leer el documento
          por su propia cuenta y no fiarse al 100% de esta opción.
          </p>
        </div>
        <div class="archivoNuevo h-100 d-flex justify-content-center flex-column align-items-center">
          <h4 class="text-center">Archivo Actual</h4>
          <iframe
              src="https://docs.google.com/viewer?url=http://res.cloudinary.com/dnbwjuwvx/raw/upload/v1702411482/intercambio 24-1C.docx&embedded=true"
              style="width:100%; height:100%;">
          </iframe>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .note{
    width: 10%;
  }
  .ultimoArchivo{
    width: 45%;
  }
  .archivoNuevo{
    width: 45%;
  }
  .ventanas{
    width: 100%;
    height: calc(100% - 40px);
  }
  .contenedor{
    width: 96%;
    height: 90%;
    background-color: #cccccc;
  }

  .header{
    width: 100%;
    height: 35px;
    //background-color: #d7ac00;
  }

  .cerrar{
    color: #f89191;
    font-size: 20px;
  }

  .cerrar:hover{
    color: red;
    transition: .1s ;
    cursor: pointer;
  }
</style>