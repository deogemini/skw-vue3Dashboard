<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">Maoni Kutoka Kwa Wananchi</h1>
  </div>
  <div class="table-responsive">
    <table id="tableComponent" class="table table-bordered table-striped table-sm">
      <thead>
      <tr>
        <th>
          ID <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th>Maoni Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(oni , index) in maoni" :key="index">
        <td v-if="oni.category === '3'" v-text="index"> </td>
        <td v-if="oni.category === '3' " v-text="oni.maoni"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Maoni",
  data() {
    return {
      maoni: []
    }
  },
  methods: {
    getMaoni(){
      axios.get('http://45.56.115.113:8001/api/getfeedback/'+localStorage.getItem('username'))
          .then(response => {
            this.maoni = response.data
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
    this.getMaoni();
  }
}
</script>

<style scoped>

</style>