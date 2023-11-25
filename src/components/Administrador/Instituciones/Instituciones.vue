<script setup>
import TuplasInstituciones from "@/components/Administrador/Instituciones/TuplasInstituciones.vue";
import AgregarInstitucion from "@/components/Administrador/Instituciones/AgregarInstitucion.vue";
import {ref} from "vue";

const agregar = ref(false)

const cambiarAgregar = () => {
    agregar.value = !agregar.value
}
const noCerrarAgregar = (event) => {
    event.stopPropagation()
}
</script>

<template>
    <div class="container">
        <div class="titulo w-100 d-flex justify-content-center align-items-center h1" style="height: 100px; color: #1B365D">
            INSTITUCIONES
        </div>
        <div class="tabla w-100 d-flex justify-content-center">
            <div style="width: 1400px;">
                <div class="buscar d-flex gap-2 mb-2">
                    <input type="text" class="form-control" placeholder="Buscar por nombre..." style="width: 400px;">
                    <button class="btn btn-primary" @click="cambiarAgregar">Agregar Institución</button>
                </div>
                <div class="ventanaAgregar" v-if="agregar" @click="cambiarAgregar">
                    <AgregarInstitucion :visible.sync="agregar" @click="noCerrarAgregar"/>
                </div>
                <table class="table">
                    <thead class="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Identificación</th>
                        <th scope="col">Dirección</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    <TuplasInstituciones/>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
}

.ventanaAgregar {
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

</style>