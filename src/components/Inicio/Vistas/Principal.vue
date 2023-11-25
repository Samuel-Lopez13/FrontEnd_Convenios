<script setup>
import Sidebar from "@/components/Inicio/Vistas/Sidebar.vue";
</script>

<template>
  <div class="parent w-100 vh-100">
    <div class="div1 d-flex justify-content-center" style="background-color: #1B365D">
      <img src="../../../assets/imagenes/UAC.png" style="width: 200px; height: 100px">
    </div>
    <div class="div2" style="background-color: #1B365D"> </div>
    <div class="div3">
      <Sidebar/>
    </div>
    <div class="div4">
      <router-view></router-view>
    </div>
    <div class="div5" style="background-color: #1B365D"> </div>
    <div class="div6" style="background-color: #1B365D"> </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 3 / 1 / 4 / 2; }
.div6 { grid-area: 3 / 2 / 4 / 3; }
</style>