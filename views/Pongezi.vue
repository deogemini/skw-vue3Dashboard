<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">Pongezi</h1>
  </div>
  <div class="table-responsive">
    <table id="tableComponent" class="table table-bordered table-striped table-sm">
      <thead>
      <tr>
        <th>
          ID <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th>Pongezi Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(ponge, index) in pongezi" :key="index">
        <td v-if="ponge.category === '1'" v-text="ponge.id"> </td>
        <td v-if="ponge.category === '1' " v-text="ponge.maoni"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pongezi",
  data() {
    return {
      pongezi: []
    }
  },
  methods: {
    getPongezi(){
      axios.get('http://45.56.115.113:8001/api/getfeedback/Sudi/')
          .then(response => {
            this.pongezi = response.data
            console.log(response.data);
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
    this.getPongezi();
  }
}
</script>

<style scoped>

</style>