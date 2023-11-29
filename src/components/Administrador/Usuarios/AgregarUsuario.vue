<script setup>
/****************************************             IMPORT             ***********************************************/

import store from '@/store';
import {onMounted, ref} from "vue";
import {DatosPersonales} from "@/api/provides/usuario.services";
import {DatosInstituciones} from "@/api/provides/institucion.services";

/**************************************             VARIABLES             **********************************************/

const Nombre = ref("");
const Email = ref("");
const Institucion = ref("");
const Id_Institucion = ref(0);
const Busqueda = ref("");
const Instituciones = ref([]);

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    TodasInsituciones();
})

/*****************************************             EMIT             ************************************************/

const emit = defineEmits('cerrar-ventana')

/****************************************             METODOS             **********************************************/

const seleccionado = (id, nombre) => {
    Institucion.value = nombre;
    Id_Institucion.value = id;
}

const TodasInsituciones = async () => {
    Instituciones.value = await DatosInstituciones.getAllInstituciones()

    Instituciones.value.map((item) => {
        return {
            institucion_Id: item.institucion_Id,
            nombre: item.nombre
        }
    })
}

const agregarUsuario = async () => {
    //Agrega una nueva institucion
    await DatosPersonales.postUsuario(Nombre.value, Email.value, Id_Institucion.value);
    //Cuando cambie se actualizaran las instituciones
    store.state.CrearUsuario = true

    cerrarVentana()

    //Verifica que el numero de paginas cambie
    var tamano = await DatosInstituciones.getPaginas()
    store.state.Paginacion = tamano.paginas
}

const cerrarVentana = () => {
    emit('cerrar-ventana');
}

</script>

<template>
    <div class="agregar">
        <div class="titulo d-flex justify-content-center align-items-center">
            <h3>Agregar Usuario</h3>
        </div>
        <form class="formulario p-4 d-flex flex-column align-items-center">
            <div class="Nombre pb-3 d-flex flex-column">
                <label class="form-label">Nombre</label>
                <input type="text" class="form form-control form-label" v-model="Nombre">
            </div>
            <div class="Nombre pb-3 d-flex flex-column">
                <label class="form-label">Email</label>
                <input type="email" class="form form-control form-label" v-model="Email">
            </div>
            <div class="Nombre pb-3 d-flex flex-column">
                <label class="form form-label">Institución</label>
                <input type="text" class="form-control form-label" placeholder="Buscar institución..."
                       v-model="Busqueda">
                <div class="instituciones p-3">
                    <div class="institucion d-flex flex-column justify-content-between"
                         v-for="(AllInstitutions, index) in Instituciones">
                        <div class="seleccionInst"
                             @click="seleccionado(AllInstitutions.institucion_Id, AllInstitutions.nombre)">
                            {{ AllInstitutions.nombre }}
                        </div>
                    </div>
                </div>
                <input type="text" readonly class="form-control form-label" v-model="Institucion">
            </div>
            <div class="btn btn-primary form-label d-flex justify-content-center align-items-center" @click="">Agregar
            </div>
        </form>
    </div>
</template>

<style scoped>
.instituciones {
    min-height: 100px;
    max-height: 100px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #d5d9de;
    transition: all .3s;
    margin-bottom: 20px;
    overflow-y: auto;
}

.instituciones::-webkit-scrollbar {
    width: 12px;
    background: #dcdbdb;
}

.instituciones::-webkit-scrollbar-thumb {
    background-color: #1B365D;
    border-radius: 5px;
}

.institucion {
    gap: 2px;
}

.seleccionInst {
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 5px;
}

.seleccionInst:hover {
    background-color: #a6a1a1;
    border-radius: 3px;
    cursor: pointer;
}

.agregar {
    width: 400px;
    height: auto;
    background-color: #fefefe;
    box-shadow: 8px 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.form {
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