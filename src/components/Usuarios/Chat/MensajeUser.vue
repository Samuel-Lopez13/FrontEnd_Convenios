<script setup>

/****************************************             PROPS             ************************************************/

const props = defineProps(['isMe', 'mensaje', 'Nombre']);

/**************************************             VARIABLES             **********************************************/

/****************************************             METODOS             **********************************************/

const obtenerChats = async () => {

}
</script>

<template>
    <div class="d-flex flex-column w-100">
        <!--Usuario logeado-->
        <div class="p-2 w-100 d-flex justify-content-end" v-if="!isMe">
            <div class="w-75 d-flex justify-content-end">
                <div class="pt-1">
                    <p class="fw-bold mb-0">{{Nombre}}</p>
                    <p class="small text-muted">
                        {{mensaje}}
                    </p>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                     class="rounded-circle d-flex align-self-center ms-3 shadow-1-strong" width="40">
            </div>
        </div>
        <div class="p-2 w-100 d-flex justify-content-start" v-if="isMe">
            <div class="w-75 d-flex">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                     class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="40">
                <div class="pt-1">
                    <p class="fw-bold mb-0">{{Nombre}}</p>
                    <p class="small text-muted">
                        {{mensaje}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>