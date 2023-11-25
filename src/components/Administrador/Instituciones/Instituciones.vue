<script setup>

</script>

<template>
  <div class="parent">
    <div class="div1 h1 d-flex justify-content-center align-items-center">
      INSTITUCIONES
    </div>
    <div class="div2 d-flex justify-content-center">
      <div style="width: 1400px;">
        <table class="table">
          <thead class="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><i class="bi bi-info-circle"></i></td>
            <td><i class="bi bi-trash3-fill"></i></td>
          </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination d-flex justify-content-center">
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
.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
</style>