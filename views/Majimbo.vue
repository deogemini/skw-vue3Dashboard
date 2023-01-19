<template>
<div>
  <b-card  class="mb-3">
    <b-card-header>
      <b-card-title class="text-center">Majimbo ya Mkoa</b-card-title>
    </b-card-header>
    <b-card-text>Majimbo ya uchaguzi yaliyosajiliwa kwenye mfumo wa SKW</b-card-text>
    <b-spinner v-if="loading" variant="primary" label="Loading..."></b-spinner>
    <b-table
        head-variant="light"
        bordered
        striped hover
        :items="items" :fields="fields" outlined>
      <template v-slot:cell(serialNumber)="data">
        {{ data.index + 1 }}
      </template>
    </b-table>
  </b-card>

  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

export default {
  components: {
    BTable
  },
  name: "Majimbo",
  data() {
    return {
      loading: true,
      items: [],
      maoniyote:[],
      fields: [
        { key: 'serialNumber',
          label: '#',
        },
        { key: 'jina_la_jimbo',
          label: 'Jina la Jimbo',
          sortable: true
        },

      ]
    }
  },
  methods: {
  async  getMajimbokwenyeMkoa(){
    this.loading = true;
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
          this.items = response.data.majimbo
          localStorage.setItem('majimboAmount', this.items.length )
    this.loading= false;
  }
  },
  mounted() {
    this.getMajimbokwenyeMkoa();
  }
}
</script>

<style scoped>

</style>