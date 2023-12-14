<template>
  <div class="contenedor">
    <div class="contenido">
      <h1>¡Oops!</h1>
      <h4>404 - Página No Encontrada</h4>
      <p>La página que estás buscando podría haber sido removida, tener su nombre cambiado o estar temporalmente no disponible.</p>
      <button @click="redirigirInicio">Ir a la Página de Inicio</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    redirigirInicio() {
      router.push("/Inicio");
    },
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}

.contenido {
  padding: 20px;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
}

h1 {
  margin-bottom: 20px;
  color: #1B365D;
  font-size: 100px;
}

p {
  margin-bottom: 40px;
}

button {
  background-color: #1B365D;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .contenido {
    padding: 10px;
  }

  button {
    padding: 10px 20px;
  }
}
</style>
