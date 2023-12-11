<script setup>
import {onMounted, ref, watch} from "vue";
import {DatosPersonales} from "@/api/provides/usuario.services";
import {DatosContratos} from "@/api/provides/contratos.services";
import {NotificacionExito, NotificacionFirma} from "@/alertas/alerts";
import {useRoute} from 'vue-router';
import store from "@/store";

const route = useRoute();
const idC = ref(route.params.idContrato);
const fileInput = ref(null);
//ADMIN
const btnRevisionA = ref(true)
const btnMandarFirma = ref(true)
//USER
const btnRevision = ref(false)
const btnFirmar = ref(false)
//AMBOS
const btnCambios = ref(true)

const statusF = ref(false);
const Admin = ref(false)
const Status = ref("Activo")
const resultadoFirmar = ref(true);

onMounted(async () => {
    await verificarRol();
    await statusRevision();
    await statusFirma();
    //await ContratoTerminado();
})

watch(() => store.state.Revision, () => {
    statusRevision();
    store.state.Revision = false;
})

/*const ContratoTerminado = async () => {
    btnFirmar.value = await DatosContratos.getContratoFull(idC.value)
}*/

const verificarRol = async () => {
    var rol = await DatosPersonales.userRol()
    console.log(rol)
    if (rol === "Administrador") {
        Admin.value = true;
    }
}

const statusRevision = async () => {
    try {
        var status = await DatosContratos.obtenerStatusRevision(idC.value);
        console.log('Status:', status);

        if (status === true) {
            btnRevisionA.value = false;
            btnRevision.value = true;
        } else {
            btnRevisionA.value = true;
            btnRevision.value = false;
        }

        console.log('btnRevisionA:', btnRevisionA.value);
        console.log('btnRevision:', btnRevision.value);
    } catch (error) {
        console.error('Error al obtener el estado de revisión:', error);
    }
}

const obtenerArchivo = (event) => {
    fileInput.value = event.target.files;
}
const mandarRevision = async () => {
    const formData = new FormData();
    console.log(idC.value)
    formData.append('Contrato_Id', idC.value)
    for (let i = 0; i < fileInput.value.length; i++) {
        formData.append('File', fileInput.value[i]);
    }
    await fetch('http://localhost:5193/Contratos/Contratos', {
        method: 'PUT',
        body: formData,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("Credenciales")}`
        },
    })
        .then(async response => {
            if (response.ok) {
                NotificacionExito.ExitosoWMensaje('Revision Envida')
                store.state.Revision = true;
            } else {
                throw new Error('Error al crear el contrato');
            }
        })
        .catch(error => console.error('Error:', error))
}

const mandarFirma = async () => {
    await DatosContratos.Firma(idC.value)
}

const statusFirma = async () => {
    statusF.value = await DatosContratos.getStatusFirma(idC.value);
    if (statusF.value === true) {
        btnRevisionA.value = false;
        btnRevision.value = false;
        btnMandarFirma.value = false;
        btnFirmar.value = true;
    }
}
const FirmarContrato = async () => {
    const resultadoFirma = await NotificacionFirma.Firmar('¿Seguro que deseas aplicar la firma?');
    if (resultadoFirma.isConfirmed) {
        await DatosContratos.FirmaUsuario(idC.value, statusF.value)
        NotificacionExito.ExitosoWMensaje('Firmaste el contrato')
        console.log()
        btnFirmar.value = false;
        Status.value = "Inactivo";
    } else {
        console.log('El usuario no confirmo')
    }
}
</script>

<template>

    <div class="botones  p-3">
        <div class="fase h4 d-flex justify-content-center align-items-center">
            ACCIONES
        </div>
        <h5 class="h5 text-center mb-3">Status : {{ Status }}</h5>
        <div class="opciones d-flex flex-column justify-content-between">
            <div class="accione">
                <div class="botonUser" v-if="!Admin">
                    <form class="d-flex flex-column gap-3 align-items-center" @submit.prevent="mandarRevision">
                        <label class="form-label">Subir una modificación</label>
                        <input type="file" class="form form-control form-label" @change="obtenerArchivo" accept=".docx">
                        <button class="btn btn-warning form-label form-control" :class="{ 'disabled': !btnRevision }">
                            Mandar a Revisión
                        </button>
                    </form>
                    <button class="btn btn-success form-label form-control" :class="{ 'disabled': !btnFirmar }"
                            @click="FirmarContrato">Firmar
                    </button>
                </div>
                        <div class="botonesAdmin d-flex flex-column" v-if="Admin">
                            <form class="d-flex flex-column gap-3 align-items-center" @submit.prevent="mandarRevision">
                                <label class="form-label">Subir una modificación</label>
                                <input type="file" class="form form-control form-label" @change="obtenerArchivo"
                                       accept=".docx">
                                <button class="btn btn-warning form-label form-control"
                                        :class="{ 'disabled': !btnRevisionA }">
                                    Mandar a Revisión
                                </button>
                            </form>
                            <!--<button class="btn btn-danger form-label" :class="{ 'disabled': !btnFirmar }">Cambiar Fase</button>-->
                            <button class="btn btn-success form-label" :class="{ 'disabled': !btnMandarFirma }"
                                    @click="mandarFirma">Mandar a Firma
                            </button>
                        </div>
                    </div>
                    <!--<button class="btn btn-primary form-label" :class="{ 'disabled': !btnCambios }">Verificar Cambios</button>-->
                </div>
            </div>
</template>

<style scoped>
.form {
    width: 100%;
}

.opciones {
    width: 100%;
    height: calc(100% - 160px);
    margin-top: 60px;
}

.fase {
    width: 100%;
    height: 70px;
}

.botones {
    width: 15%;
    height: 100%;
    border-right: 1px solid #cccccc;
}
</style>