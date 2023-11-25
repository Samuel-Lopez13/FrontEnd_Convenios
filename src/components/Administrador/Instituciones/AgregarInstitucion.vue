<script setup>
import Instituciones from "@/components/Administrador/Instituciones/Instituciones.vue";
</script>

<template>
    <div class="agregar">
        <div class="titulo d-flex justify-content-center align-items-center">
            <h3>Agregar nueva institución</h3>
        </div>
        <form class="formulario p-4 d-flex flex-column align-items-center">
            <div class="Nombre pb-3 d-flex flex-column">
                <label class="form-label">Nombre</label>
                <input type="text" class="form form-control form-label">
            </div>
            <div class="btn btn-primary form-label d-flex justify-content-center align-items-center" @click="">Agregar
            </div>
        </form>
    </div>
</template>

<style scoped>
.agregar {
    width: 400px;
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