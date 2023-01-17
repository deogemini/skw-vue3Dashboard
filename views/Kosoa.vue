<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">Wananchi Walivyo Kosoa</h1>
  </div>
  <div class="table-responsive">
    <table id="tableComponent" class="table table-bordered table-striped table-sm">
      <thead>
      <tr>
        <th>
          ID <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th>Malalamiko Husika<i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(makos, index) in makosa" :key="index">
        <td v-text="index+1"> </td>
        <td v-text="makos.maoni"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Kosoa",
  data() {
    return {
      maoniyote:[],
      makosa: []

    }
  },
  methods: {
    getMakosa(){
      axios.get('http://45.56.115.113:8001/api/getfeedback/'+localStorage.getItem('username'))
          .then(response => {
            this.maoniyote = response.data
            this.makosa = this.maoniyote.filter((object) => {
              if(object.category == 2){
                return object;
              }
            })
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
    this.getMakosa();
  }
}
</script>

<style scoped>

</style>