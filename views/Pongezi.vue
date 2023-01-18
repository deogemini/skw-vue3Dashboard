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
        <th>Sekta Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
        <th>Jimbo Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="(ponge, index) in pongezi" :key="index">
        <td v-text="index+1"> </td>
        <td v-text="ponge.maoni"></td>
        <td v-text="ponge.sekta"></td>
        <td v-text="ponge.jimbo"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios, {Axios} from "axios";

export default {
  name: "Pongezi",
  data() {
    return {
      maoniyote:[],
      pongezi: [],
    }
  },
  methods: {
      async getPongezi(){
       const config = {
         method: 'get',
         url: 'http://45.56.115.113:8001/api/getfeedback/',
         headers: {
           Authorization: `Token ` + localStorage.getItem('token')

         }
       }
       let response = await axios(config)
        this.maoniyote = response.data.result;
       console.log(this.maoniyote.length)
        localStorage.setItem('maoniAmount', this.maoniyote.length )
        this.pongezi = this.maoniyote.filter((object) => {
          if(object.feedback_type == "Pongezi")
            return object;
        });
       console.log(this.pongezi)
    }
  },
  mounted() {
    this.getPongezi();
  }
}
</script>

<style scoped>

</style>