<script setup>

/****************************************             IMPORT             ***********************************************/

import {DatosChat} from "@/api/provides/chat.services";
import {ref, onMounted, watch} from "vue";
import MensajeUser from "@/components/Usuarios/Chat/MensajeUser.vue";
import Opciones from "@/components/Usuarios/Opciones.vue";

/**************************************             VARIABLES             **********************************************/

const chat = ref([]);
const textMensaje = ref("");

/*************************************             ON MOUNTED             **********************************************/

onMounted(() => {
    obtenerChats();
})

/****************************************             METODOS             **********************************************/
const obtenerChats = async () => {
    chat.value = await DatosChat.getMensajes(2);

    chat.value.map((item) => {
        return {
            mensaje: item.mensaje,
            isMe: item.isMe,
            usuario: item.usuario
        }
    })
}

const MandarMensaje = async () => {
    await DatosChat.postMensaje(textMensaje.value, 2);
    textMensaje.value = "";
    obtenerChats();
}

</script>

<template>
    <div class="contenedor w-100 h-100 d-flex bg-light">
        <div class="vistaDocumento d-flex justify-content-center align-items-center">
            <iframe
                src="https://docs.google.com/gview?url=https://github.com/Samuel-Lopez13/FrontEnd_Convenios/raw/main/Prueba.docx&embedded=true"
                style="width:800px; height:100%;">
            </iframe>
        </div>
        <opciones/>
        <div class="chat bg-light">
            <div class="nombreContrato h3 m-0 d-flex align-items-center justify-content-center">
                CONTRATO 01
            </div>
            <div class="contenidoChat">
                <MensajeUser v-for="(chats, index) in chat" :key="index"
                    :mensaje="chats.mensaje"
                    :isMe="chats.isMe"
                    :Nombre="chats.usuario"
                />
            </div>
            <div class="inputChat d-flex justify-content-center align-items-center gap-3">
                <textarea class="form-control textChat" id="textAreaExample2" v-model="textMensaje"></textarea>
                <button class="btn btn-primary" @click="MandarMensaje">Enviar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.textChat {
    height: 80%;
    width: 80%;
}

.inputChat {
    width: 100%;
    height: calc(100% - 620px);
    background-color: #E4E4ED;
}

.contenidoChat {
    width: 100%;
    height: 520px;
    overflow-y: auto;
}

.contenidoChat::-webkit-scrollbar {
    width: 6px;
    background: #dcdbdb;
}

.contenidoChat::-webkit-scrollbar-thumb {
    background-color: #1B365D;
    border-radius: 5px;
}

.nombreContrato {
    width: 100%;
    height: 100px;
}

.vistaDocumento {
    width: 55%;
    height: 100%;
    border-right: 1px solid #cccccc;
}

.chat {
    width: 30%;
    height: 100%;
}

.contenedor {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #cccccc;
}
</style>