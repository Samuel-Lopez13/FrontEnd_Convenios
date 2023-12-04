<script setup>

/****************************************             PROPS             ************************************************/

const props = defineProps(['isMe', 'mensaje', 'Nombre']);
</script>

<template>
  <div class="p-2 w-100">
    <div class="w-75 d-flex flex-row">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
           class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="50">
      <div class="pt-1">
        <p class="fw-bold mb-0">Lara Croft</p>
        <p class="small text-muted">Lorem es una nueva etapa de nuevo pero como saber que tan largo sera el mensaje
            Lorem es una nueva etapa de nuevo pero como saber que tan largo sera el mensaje
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>