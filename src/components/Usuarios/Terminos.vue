<script setup>
import {ref} from "vue";
import DatosInstitucion from "@/components/Usuarios/DatosInstitucion.vue";

const completar = ref(true)

const cerrarCompletar = () =>{
  completar.value = false
}
</script>

<template>
    <div class="ventanaCompletar" v-if="completar">
        <DatosInstitucion @CerrarDatosInst="cerrarCompletar"/>
    </div>
    <div class="contenedor w-100 h-100">
      <div class="contenido">
        <h1>¡Bienvenido a la Aplicación de Firma de Convenios de la UAC!</h1>
        <div class="terminos-y-condiciones">
          <p><strong>Términos y Condiciones de Uso:</strong></p>
          <p>1. La aplicación se proporciona únicamente con el propósito de facilitar la firma de convenios entre la UAC
            y otras instituciones de convenio.</p>
          <p>2. Usted acepta utilizar la aplicación de manera ética y conforme a todas las leyes y regulaciones
            aplicables.</p>
          <p>3. Para utilizar la aplicación, los Usuarios deben registrarse proporcionando información precisa y completa
            durante el proceso de registro.</p>
          <p>4. La aplicación permite a las partes involucradas (UAC e Institución de Convenio) firmar convenios
            electrónicamente.</p>
          <p>5. La UAC se compromete a proteger la privacidad y la seguridad de los datos proporcionados por los
            Usuarios. Consulte nuestra Política de Privacidad para obtener más información sobre cómo manejamos los
            datos personales.</p>
          <p>6. La UAC no se hace responsable de los contenidos, acciones o acuerdos entre las partes que utilizan la
            aplicación. Los Usuarios asumen la responsabilidad total de sus acciones y acuerdos celebrados a través de
            la aplicación.</p>
          <p>7. La UAC se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones
            entrarán en vigor a partir de su publicación en la aplicación. Se recomienda a los Usuarios revisar
            regularmente los Términos para estar al tanto de cualquier cambio.</p>
          <p>8. La UAC se reserva el derecho de suspender o cancelar el acceso a la aplicación en cualquier momento y por
            cualquier motivo, sin previo aviso.</p>
          <p>Estos Términos se rigen por las leyes de México y cualquier disputa relacionada con estos Términos se
            resolverá exclusivamente en los tribunales competentes de Campeche, México.</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.ventanaCompletar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Opacidad aumentada */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Z-index aumentado */
}

.contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.contenido {
  width: 100%;
  /* Use the full width */
  max-width: 1400px;
  margin: 0px;
  /* Center the content horizontally */
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.terminos-y-condiciones {
  overflow-y: auto;
  /* Add scroll if content is too long */
  max-height: 400px;
  /* Set a max height for the terms and conditions */
  margin-bottom: 20px;
  /* Add space before the actions */
}

.acciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #0056b3; /* Color de fondo azul */
  color: white; /* Texto en color blanco */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor en forma de mano al pasar sobre el botón */
  font-size: 16px; /* Tamaño de la fuente */
  transition: background-color 0.3s ease; /* Transición suave del color de fondo */
}

button:hover {
  background-color: #003d82; /* Color de fondo más oscuro al pasar el mouse */
}

button:disabled {
  background-color: #cccccc; /* Color de fondo gris cuando el botón esté deshabilitado */
  cursor: not-allowed; /* Cursor en forma de prohibido */
}
</style>