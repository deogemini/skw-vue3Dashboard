<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">MAJIMBO YA MKOA</h1>
  </div>
  <div class="table-responsive">
    <table id="tableComponent" class="table table-bordered table-striped table-sm">
      <thead>
      <tr>
        <th>
          ID <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th>Jina la Jimbo <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(majimb, index) in majimbo" :key="index">
        <td > {{index+1}}</td>
        <td v-text="majimb.jina_la_jimbo"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios, {AxiosHeaders} from "axios";

let mkoa = 'Songwe';

const configuration = {
  headers:{
    Authorization: `Token 7b38a209b2c74ee86b6656a2596a8d53e53b8f18`
  }
};

export default {
  name: "Majimbo",
  data() {
    return {
      majimbo: []
    }
  },
  methods: {
  async  getMajimbokwenyeMkoa(){
    const config = {
      method: 'get',
      url: 'http://45.56.115.113:8001/api/provincies',
      headers:
          {
            Authorization: `Token `+ localStorage.getItem('token')
          }
    }
    let response = await axios(config)
          console.log(response.data);
          this.majimbo = response.data.majimbo
          localStorage.setItem('majimboAmount', this.majimbo.length )
    }
  },
  mounted() {
    this.getMajimbokwenyeMkoa();
  }
}
</script>

<style scoped>

</style>