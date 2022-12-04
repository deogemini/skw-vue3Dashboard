<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">Sekta Mbalimbali</h1>
  </div>
  <div class="table-responsive">
    <table id="tableComponent" class="table table-bordered table-striped table-sm">
      <thead>
      <tr>
        <th>
          ID <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th>Jina la Sektor <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(sekta, index) in sectors" :key="index">
        <td v-text="sekta.id"> </td>
        <td v-text="sekta.jina"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Sectors",
  data() {
    return {
      sectors: []
    }
  },
  methods: {
    getSectors(){
      axios.get('http://45.56.115.113:8001/api/sectors/')
          .then(response => {
            this.sectors = response.data.regions
            console.log(response.data);
            console.log(response.data.regions);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });

    }
  },
  mounted() {
    this.getSectors();
  }
}
</script>

<style scoped>

</style>