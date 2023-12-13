<script setup>
</script>

<template>
  <section class="vh-100" style="background-color: #1B365D;">
    <img src="../../assets/imagenes/UAC.png" class="position-absolute">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <img src="../../assets/imagenes/LogoConvenios.png" style="background-color: #1B365D; width: 450px">
        <div class="col col-xl-5">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-12 d-flex align-items-center">
                <div class="card-body p-lg-5 text-black">
                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>