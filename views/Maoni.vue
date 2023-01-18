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
        <th>Sekta Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
        <th>Jimbo Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(oni , index) in views" :key="index">
        <td v-text="index+1"> </td>
        <td v-text="oni.maoni"></td>
        <td v-text="oni.sekta"></td>
        <td v-text="oni.jimbo"></td>
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
      maoniyote: [],
      views: []
    }
  },
  methods: {
    async getMaoni(){
      const config = {
        method: 'get',
        url: 'http://45.56.115.113:8001/api/getfeedback/',
        headers: {
          Authorization: `Token ` + localStorage.getItem('token')

        }
      }
      let response = await axios(config)
      this.maoniyote = response.data.result;
      this.views = this.maoniyote.filter((object) => {
        if(object.feedback_type == "Maoni")
          return object;
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