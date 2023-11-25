<script setup>
import TuplasInstituciones from "@/components/Administrador/Instituciones/TuplasInstituciones.vue";
import AgregarInstitucion from "@/components/Administrador/Instituciones/AgregarInstitucion.vue";
import {DatosInstituciones} from "@/api/provides/institucion.services";
import {onMounted, ref} from "vue";

const agregar = ref(false)
const pagina = ref(1)
const paginas = ref([])

onMounted(() => {
    paginacion();
})

const cambiarAgregar = () => {
    agregar.value = !agregar.value
}
const noCerrarAgregar = (event) => {
    event.stopPropagation()
}

const paginacion = async () => {
    var tamano = await DatosInstituciones.getPaginas()
    for (let i = 1; i <= tamano.paginas; i++) {
        paginas.value.push(i)
    }
}

const paginaNueva = (paginas) => {
    pagina.value = paginas
}

</script>

<template>
    <div class="container">
        <div class="titulo w-100 d-flex justify-content-center align-items-center h1"
             style="height: 100px; color: #1B365D">
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
                    <TuplasInstituciones
                        :pagina = pagina
                    />
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item" v-for="(paginas, index) in paginas">
                            <a class="page-link" href="#" @click="paginaNueva(paginas)">{{ paginas }}</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
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